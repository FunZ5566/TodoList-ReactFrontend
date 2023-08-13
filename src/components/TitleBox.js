import React, { useState, useEffect } from 'react';

const TitleBox = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000); // 每秒更新一次日期

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className="card">
            <h1>ToDoList</h1>
            <p className="date">{currentDate.toLocaleDateString()}</p>
            <p className="quote">只要今天的自己比昨天進步一點，
                人生就會不斷邁進。</p>
        </div>
    );
};

export default TitleBox;
