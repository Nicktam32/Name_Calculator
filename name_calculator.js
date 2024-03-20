function calculate() {    
    // 獲取輸入值
    const nameInput = document.getElementById('nameInput').value.trim(); // 獲取姓名輸入並去除首尾空格
    const isFuxingSelect = document.getElementById('複姓Select').value; // 獲取複姓選項的值

    // 檢查姓名輸入是否為空
    if (nameInput.length === 0) { // 如果姓名為空
        alert('請輸入姓名！'); // 提示用戶輸入姓名
        return; // 結束函數
    }



    // 將姓名拆分為字符列表
    const nameList = nameInput.split(''); // 使用空字符拆分姓名，得到字符列表
    console.log(nameList)
    const nameText = []; // 姓名字符列表
    let wordStrokeCounts = []; // 用於保存每個詞的康熙劃數

    for (let i = 0; i < nameList.length; i++) { // 遍歷姓名字符列表
        // 在字典中查找字符
        const characterData = dictionary.find(obj => obj && obj["文字"] === nameList[i]);
        console.log(characterData)
        if (characterData && characterData.文字) { // 如果找到字典數據且字典數據中包含文字屬性
            nameText.push(nameList[i]);  // 將每個字符推送到nameText數組中
            console.log(nameText)
            wordStrokeCounts.push(dictionary[nameList[i]]);
            console.log(wordStrokeCounts)
        } else {
            console.log(`字典中找不到字符: ${nameList[i]}`); // 如果字典中找不到字符，輸出錯誤信息到控制台
        }
    }

    // 顯示輸入值和康熙劃數
    const resultDiv = document.getElementById('result'); // 獲取結果顯示區域的元素
    resultDiv.innerHTML = `
        <p>您的姓名是：${nameInput}</p> 
        <p>是否複姓：${isFuxingSelect}</p> 
        <p>姓名拆分：${nameList}</p> 
        ${wordStrokeCounts}
    `;
}
