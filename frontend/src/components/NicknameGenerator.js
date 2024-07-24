import React, { useState } from 'react';

function NicknameGenerator() {
    const [nickname, setNickname] = useState('');

    const fetchNickname = async () => {
        const response = await fetch('http://localhost:8000/nickname');
        const data = await response.json();
        setNickname(data.nickname);
    }

    return (
        <div style={{ textAlign: 'center', marginTop: '20%' }}>
            <h1>水果动物</h1>
            <button onClick={fetchNickname} style={{ padding: '10px 20px', fontSize: '16px' }}>你的名字</button>
            {nickname && <h2 style={{ marginTop: '20px' }}>{nickname}</h2>}
        </div>
    )
}

export default NicknameGenerator;