let clickCount = 0;

// 클릭 시 실행
function leafClick(event) {
  const leaf = event.target;
  if (leaf.classList.contains("clicked")) return;

  const decision = clickCount % 2 === 0 ? "do" : "don't";
  document.getElementById("decisionWord").textContent = decision;

  leaf.classList.add("clicked");
  leaf.style.top = "400px";

  clickCount++;
}

// 시작 버튼 클릭 시 실행
function clickStartButton() {
  resetTree();
  clickCount = 0;
  updateDecisionText("do/ don't");
  generateLeaves();
}

// 텍스트 초기화
function updateDecisionText(text) {
  document.getElementById("decisionWord").textContent = text;
}

// 트리 초기화
function resetTree() {
  const tree = document.getElementById("tree");
  tree.innerHTML = '<div id="branch"></div>';
}

// 나뭇잎 생성 전체
function generateLeaves() {
  const leafCountL = 3 + Math.floor(Math.random() * 5); // 3~7개
  const leafCountR = 3 + Math.floor(Math.random() * 5);

  generateLeafSide(true, leafCountL);  // 왼쪽 나뭇잎
  generateLeafSide(false, leafCountR); // 오른쪽 나뭇잎
}

// 왼쪽 또는 오른쪽 나뭇잎 여러 개 생성
function generateLeafSide(isLeft, leafCount) {
  const tree = document.getElementById("tree");
  const usedY = [];
  let currentY = 80;

  for (let i = 0; i < leafCount; i++) {
    const leaf = createLeaf(isLeft);

    // Y 위치 계산
    const distance = 30 + Math.floor(Math.random() * 20);
    if (i > 0) {
      currentY = usedY[usedY.length - 1] + distance;
      if (currentY > 350) currentY = 340;
    }
    usedY.push(currentY);
    leaf.style.top = currentY + "px";

    tree.appendChild(leaf);
  }
}

// 단일 나뭇잎 하나 생성
function createLeaf(isLeft) {
  const leaf = document.createElement("div");
  leaf.className = isLeft ? "leafL" : "leafR";
  leaf.style.left = isLeft
    ? Math.random() > 0.3 ? "31%" : "33%"
    : Math.random() > 0.5 ? "49%" : "47%";
  leaf.onclick = leafClick;
  return leaf;
}


document.getElementById("startBtn").addEventListener("click", clickStartButton);
