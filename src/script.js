let clickCount = 0;

function leafClick(event) {
    const leaf = event.target;
  
    // If the leaf was already clicked, do nothing
    if (leaf.classList.contains("clicked")) return;
  
    // Decide "do" or "don't" based on click count
    const decision = clickCount % 2 === 0 ? "do" : "don't";
  
    // Update the sentence
    document.getElementById("decisionWord").textContent = decision;
  
    // Mark as clicked & make it fall
    leaf.classList.add("clicked");
    leaf.style.top = "400px";  // 바로 떨어지도록 위치 조정
  
    clickCount++;
  }

function generateLeaves() {
  const tree = document.getElementById("treeContainer");
  const leafCountR = 3 + Math.floor(Math.random() * 5)
  const leafCountL = 3 + Math.floor(Math.random() * 5)

  //reset the leaves and settings
  tree.innerHTML = '<div id="branch"></div>';
  clickCount = 0;
  document.getElementById("decisionWord").textContent = "do/ don't";

  const usedY = [];

  // create right leaves
  let currentY = 100;
  for (let i = 0; i < leafCountR; i++) {
    const leafR = document.createElement("div");
    leafR.className = "leafR";

    const distance = 30 + Math.floor(Math.random() * 20);
    if (i > 0) {
      currentY = usedY[usedY.length - 1] + distance;
      if (currentY > 350) {
        currentY = 340;
      }
    }

    usedY.push(currentY);

    leafR.style.top = currentY + "px";
    leafR.style.left = Math.random() > 0.5 ? "49%" : "47%"; //right side

    leafR.onclick = leafClick;

    tree.appendChild(leafR);
  }

  // create left leaves
  currentY = 80;
  usedY.length = 0; // 새롭게 시작
  for (let i = 0; i < leafCountL; i++) {
    const leafL = document.createElement("div");
    leafL.className = "leafL";

    const distance = 40 + Math.floor(Math.random() * 20);
    if (i > 0) {
      currentY = usedY[usedY.length - 1] + distance;
      if (currentY > 350) {
        currentY = 340;
      }
    }

    usedY.push(currentY);

    leafL.style.top = currentY + "px";
    leafL.style.left = Math.random() > 0.3 ? "31%" : "33%"; // left side

    leafL.onclick = leafClick;

    tree.appendChild(leafL);
  }
}

document.getElementById("startBtn").addEventListener("click", generateLeaves);