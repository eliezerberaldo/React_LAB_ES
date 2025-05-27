import { useState } from 'react';

export default function MovingDot() {
    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    });

    return (
        <div className="centralizando-componente">
            <div
                onPointerMove={(e) => {
        
                    const rect = e.currentTarget.getBoundingClientRect();
                    setPosition({
                        x: e.clientX - rect.left, 
                        y: e.clientY - rect.top,  
                    });
                }}
                style={{
                    position: 'relative',
                    width: '400px', 
                    height: '300px', 
                    border: '1px solid black', 
                    overflow: 'hidden', 
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        backgroundColor: 'red',
                        borderRadius: '50%',
                        transform: `translate(${position.x}px, ${position.y}px)`,
                        width: 20,
                        height: 20,
                        pointerEvents: 'none', 
                    }}
                />
            </div>
        </div>
    );
}