'use client'
import { useState, useEffect } from 'react';

const TypewriterEffect = ({words,textStyle}:{words:string[],textStyle:string}) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);
    const [showCursor, setShowCursor] = useState(true); // حالة التحكم في ظهور المؤشر

    useEffect(() => {
        const handleTyping = () => {
            const currentWord = words[currentWordIndex];

            if (!isDeleting) {
                // الكتابة
                setCurrentText(currentWord.substring(0, currentText.length + 1));
                setTypingSpeed(200);

                if (currentText === currentWord) {
                    // الانتظار بعد اكتمال الكتابة
                    setTimeout(() => {
                        setIsDeleting(true);
                        setShowCursor(true); // إظهار المؤشر أثناء الانتظار
                    }, 3000);
                }
            } else {
                // المسح
                setCurrentText(currentWord.substring(0, currentText.length - 1));
                setTypingSpeed(200);

                if (currentText === '') {
                    // الانتقال إلى الكلمة التالية
                    setIsDeleting(false);
                    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
                    setShowCursor(true); // إظهار المؤشر عند بدء الكتابة
                }
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentWordIndex, typingSpeed, words]);

    // تأثير وميض المؤشر
    useEffect(() => {
        if (currentText === words[currentWordIndex] && !isDeleting) {
            const cursorInterval = setInterval(() => {
                setShowCursor((prev) => !prev); // تبديل حالة المؤشر
            }, 500); // سرعة الوميض

            return () => clearInterval(cursorInterval);
        }
    }, [currentText, isDeleting, currentWordIndex, words]);

    return (
        <div className="flex items-center justify-center  bg-gray-900">
            <p className={` font-bold ${textStyle}`}>
                {currentText}
                <span
                    className={`ml-1 text-darkBlue  animate-blink ${
                        showCursor ? 'opacity-100' : 'opacity-0'
                    }`}
                >
          |
        </span>
            </p>
        </div>
    );
};

export default TypewriterEffect;