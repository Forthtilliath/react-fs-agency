import React, { useEffect, useRef } from 'react';

const Mouse = () => {
    const cursor = useRef(null);

    const handleCursor = (e) => {
        // Provoquait parfois une erreur
        if (cursor.current) {
            cursor.current.style.top = e.pageY + 'px';
            cursor.current.style.left = e.pageX + 'px';
        }
    };

    const handleHover = () => {
        cursor.current.classList.add('hovered');
    };
    const handleLeave = () => {
        cursor.current.style.transition = '.3s ease-out';
        cursor.current.classList.remove('hovered');
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleCursor);

        document.querySelectorAll('.hover').forEach((link) => {
            link.addEventListener('mouseover', handleHover);
            link.addEventListener('mouseleave', handleLeave);
        });

        return () => {
            window.removeEventListener('mousemove', handleCursor);

            document.querySelectorAll('.hover').forEach((link) => {
                link.removeEventListener('mouseover', handleHover);
                link.removeEventListener('mouseleave', handleLeave);
            });
        };
    }, []);

    return <span className="cursor" ref={cursor}></span>;
};

export default Mouse;
