// 選取 DOM 元素
const editNameBtn = document.getElementById('edit-name-btn');
const saveNameBtn = document.getElementById('save-name-btn');
const nameInput = document.getElementById('name-input');
const userName = document.getElementById('user-name');
const nameEditContainer = document.getElementById('name-edit-container');

const addBtn = document.getElementById('add-btn'); // Add 按鈕
const submitBtn = document.getElementById('submit-btn'); // Submit 按鈕
const inputContainer = document.getElementById('input-container'); // 輸入區塊
const musicUrlInput = document.getElementById('music-url'); // 音樂網址輸入框
const musicNameInput = document.getElementById('music-name'); // 歌名輸入框
const musicList = document.querySelector('.music-list'); // 音樂列表



// 點擊 Edit 按鈕
editNameBtn.addEventListener('click', () => {
    nameEditContainer.classList.remove('hidden'); // 顯示輸入框
    editNameBtn.classList.add('hidden'); // 隱藏 Edit 按鈕
});

// 點擊 Save 按鈕
saveNameBtn.addEventListener('click', () => {
    const newName = nameInput.value.trim(); // 獲取輸入框值
    if (newName) {
        userName.textContent = newName; // 更新顯示名稱
    }
    nameEditContainer.classList.add('hidden'); // 隱藏輸入框
    editNameBtn.classList.remove('hidden'); // 顯示 Edit 按鈕
}); 



    // 點擊 Add 按鈕
    addBtn.addEventListener('click', () => {
    addBtn.classList.add('hidden'); // 隱藏 Add 按鈕
    inputContainer.classList.remove('hidden'); // 顯示輸入框和 Submit
    });

    // 點擊 Submit 按鈕
    submitBtn.addEventListener('click', () => {
    const musicUrl = musicUrlInput.value.trim(); // 取得輸入的音樂網址
    const musicName = musicNameInput.value.trim(); // 取得輸入的歌曲名稱

    if (musicUrl && musicUrl.startsWith('http') && musicName) {
        // 創建新的音樂元素
        const newMusicItem = document.createElement('a');
        newMusicItem.href = musicUrl;
        newMusicItem.target = "_blank";

        const musicImage = document.createElement('img');
        musicImage.src = "th.jpg"; // 使用預設圖片
        musicImage.alt = musicName;

        const musicTitle = document.createElement('p');
        musicTitle.textContent = musicName;
        musicTitle.className = "music-title";

        // 組合元素並加入音樂列表
        newMusicItem.appendChild(musicImage);
        newMusicItem.appendChild(musicTitle);
        musicList.appendChild(newMusicItem);

        // 清空輸入框
        musicUrlInput.value = '';
        musicNameInput.value = '';

        // 隱藏輸入框和 Submit，顯示 Add 按鈕
        inputContainer.classList.add('hidden');
        addBtn.classList.remove('hidden');
    } else {
        alert("請輸入有效的網址與歌曲名稱");
    }
});
