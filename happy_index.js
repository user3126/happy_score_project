const questions = [
  {
    question: "1. 하루에 평균적으로 몇 시간 정도 자나요?",
    answers: [
      { text: "3시간 미만..", score: 0 },
      { text: "3시간 이상 6시간 미만", score: 1 },
      { text: "6시간 이상 9시간 미만", score: 2 },
      { text: "9시간 이상 !!", score: 3 },
    ],
  },

  {
    question: "2. 최근 7일 중 숙면을 취한 날은 며칠인가요?",
    answers: [
      { text: "1일 미만..", score: 0 },
      { text: "1일 이상 3일 미만", score: 1 },
      { text: "3일 이상 5일 미만", score: 2 },
      { text: "5일 이상 !!", score: 3 },
    ],
  },
  {
    question: "3. 지난 7일 중 땀이 날 정도로 운동한 날은 얼마나 되나요?",
    answers: [
      { text: "1일 미만 ㅎ", score: 0 },
      { text: "1일 이상 3일 미만", score: 1 },
      { text: "3일 이상 5일 미만", score: 2 },
      { text: "5일 이상 !!", score: 3 },
    ],
  },

  {
    question: "4. 지난 7일 중 하루 세 끼를 규칙적으로 먹은 날은 얼마나 되나요?",
    answers: [
      { text: "1일 미만", score: 0 },
      { text: "1일 이상 3일 미만", score: 1 },
      { text: "3일 이상 5일 미만", score: 2 },
      { text: "5일 이상", score: 3 },
    ],
  },
  {
    question: "5. 지난 3일 중 혼자 밥을 먹은 횟수는 몇 회인가요?",
    answers: [
      { text: "2회 미만", score: 3 },
      { text: "2회 이상 5회 미만", score: 2 },
      { text: "5회 이상 8회 미만", score: 1 },
      { text: "8회 이상 !!", score: 0 },
    ],
  },
  {
    question: "6. 나는 무엇이든 스스로 해결할 수 있다는 자신감이 있나요?",
    answers: [
      { text: "오브 콜스 ~", score: 5 },
      { text: "그런편이죠", score: 4 },
      { text: "걍 보통이죠", score: 3 },
      { text: "아니요", score: 2 },
      { text: "전혀 아니요 !", score: 1 },
    ],
  },
  {
    question: "7. 나는 나 자신을 소중하게 생각하나요?",
    answers: [
      { text: "오브 콜스 ~", score: 5 },
      { text: "그런편이죠", score: 4 },
      { text: "걍 보통이죠", score: 3 },
      { text: "아니요", score: 2 },
      { text: "전혀 아니요 !", score: 1 },
    ],
  },
  {
    question: "8. 나는 나의 장점을 잘 알고 있나요?",
    answers: [
      { text: "오브 콜스 ~", score: 5 },
      { text: "그런편이죠", score: 4 },
      { text: "걍 보통이죠", score: 3 },
      { text: "아니요", score: 2 },
      { text: "전혀 아니요 !", score: 1 },
    ],
  },

  {
    question: "9. 지난 일주일 동안 불안한 감정을 얼마나 느꼈나요?",
    answers: [
      { text: "느끼지 않았음", score: 5 },
      { text: "1일 이상 3일 미만", score: 4 },
      { text: "3일 이상 5일 미만", score: 3 },
      { text: "5일 이상 7일 미만", score: 2 },
      { text: "7일 이상 !!", score: 1 },
    ],
  },
  {
    question: "10. 나는 실패를 경험해도 다시 일어설 수 있다는 자신감이 있나요?",
    answers: [
      { text: "느끼지 않았음", score: 5 },
      { text: "1일 이상 3일 미만", score: 4 },
      { text: "3일 이상 5일 미만", score: 3 },
      { text: "5일 이상 7일 미만", score: 2 },
      { text: "7일 이상 !!", score: 1 },
    ],
  },
  {
    question: "11. 가족과 일주일에 평균적으로 얼마나 대화하나용?",
    answers: [
      { text: "1시간 미만", score: 0 },
      { text: "1시간 이상 2시간 미만", score: 1 },
      { text: "2시간 이상 3시간 미만", score: 2 },
      { text: "3시간 이상 4시간 미만", score: 3 },
      { text: "4시간 이상 !!", score: 4 },
    ],
  },
  {
    question:
      "12. 학교를 제외한 사회적 교류(학원 등)는 평균적으로 일주일에 몇 번 하나욧?!@",
    answers: [
      { text: "느끼지 않았음", score: 0 },
      { text: "1일 이상 3일 미만", score: 1 },
      { text: "3일 이상 5일 미만", score: 2 },
      { text: "5일 이상 7일 미만", score: 3 },
      { text: "7일 이상 !!", score: 4 },
    ],
  },
  {
    question: "13. 고민이 있을 때 가족에게 털어놓을 수 있나요?",
    answers: [
      { text: "당연하죠 !", score: 4 },
      { text: "그런 편이죠", score: 3 },
      { text: "보통이요", score: 2 },
      { text: "그렇진 않죠..", score: 1 },
      { text: "절대 아니죠 !", score: 0 },
    ],
  },
  {
    question: "14. 그럼 친구에게 털어놓을 수 있나요?",
    answers: [
      { text: "당연하죠 !", score: 4 },
      { text: "그런 편이죠", score: 3 },
      { text: "보통이요", score: 2 },
      { text: "그렇진 않죠..", score: 1 },
      { text: "절대 아니죠 !!!", score: 0 },
    ],
  },
  {
    question:
      "15. 공부 때문에 받는 스트레스는 어느 정도인가요? (5로 갈수록 강도가 강함)",
    answers: [
      { text: "1", score: 1 },
      { text: "2", score: 2 },
      { text: "3", score: 3 },
      { text: "4", score: 4 },
      { text: "5", score: 5 },
    ],
  },
  {
    question: "16. 공부 이외 여가시간 충분하다고 느끼나요..?ㅠㅠ",
    answers: [
      { text: "당근이죠!!", score: 5 },
      { text: "그렇죠~", score: 4 },
      { text: "보통입니다", score: 3 },
      { text: "딱히..아니요..", score: 2 },
      { text: "전혀 아니에요ㅠㅜ", score: 1 },
    ],
  },
  {
    question: "17. 주변 환경은 내 삶에 편안함을 주나요?",
    answers: [
      { text: "매우 그렇다", score: 5 },
      { text: "그렇다", score: 4 },
      { text: "보통 ..", score: 3 },
      { text: "그렇지 않음", score: 2 },
      { text: "매우 그렇지 않음 !!!", score: 1 },
    ],
  },
  {
    question: "18. 공부에 대해 부모님의 기대와 압박을 자주 느끼나요?",
    answers: [
      { text: "매우 그렇다", score: 1 },
      { text: "그렇다", score: 2 },
      { text: "보통 ..", score: 3 },
      { text: "그렇지 않음", score: 4 },
      { text: "매우 그렇지 않음 !!", score: 5 },
    ],
  },
  {
    question: "19. 나는 지금 내가 하고 있는 일이 가치가 있다고 느끼나요?",
    answers: [
      { text: "매우 그렇다", score: 2 },
      { text: "그렇다", score: 1.5 },
      { text: "보통 ..", score: 1 },
      { text: "그렇지 않음", score: 0.5 },
      { text: "매우 그렇지 않음 !!", score: 0 },
    ],
  },
  {
    question: "20. 나에게는 이루고 싶은 분명한 목표가 있나요?!",
    answers: [
      { text: "매우 그렇다", score: 2 },
      { text: "그렇다", score: 1.5 },
      { text: "보통 ..", score: 1 },
      { text: "그렇지 않음", score: 0.5 },
      { text: "매우 그렇지 않음 !!", score: 0 },
    ],
  },
  {
    question: "21. 최근 1개월 동안 어떤 일을 해냈다고 느낀 적이 있나요?",
    answers: [
      { text: "매우 자주 있었고, 뿌듯했당", score: 2 },
      { text: "자주 있었다 ㅎ", score: 1.5 },
      { text: "몇 번 느낀 적 있다", score: 1 },
      { text: "별루 없다..", score: 0.5 },
      { text: "전혀 없다ㅠㅜ", score: 0 },
    ],
  },
  {
    question: "22. 노력한 만큼 결과가 나온다고 느끼나요?",
    answers: [
      { text: "매우 그렇다", score: 2 },
      { text: "그렇다", score: 1.5 },
      { text: "보통 ..", score: 1 },
      { text: "그렇지 않음", score: 0.5 },
      { text: "매우 그렇지 않음 !!", score: 0 },
    ],
  },
  {
    question: "23. 나는 내가 내린 결정에 대해 스스로 확신이 있다고 느끼나요?",
    answers: [
      { text: "매우 그렇다", score: 2 },
      { text: "그렇다", score: 1.5 },
      { text: "보통 ..", score: 1 },
      { text: "그렇지 않음", score: 0.5 },
      { text: "매우 그렇지 않음 !!", score: 0 },
    ],
  },
  {
    question: "24. 타인을 배려할 때 행복감을 느끼나요?",
    answers: [
      { text: "매우 그렇다!!", score: 2 },
      { text: "그렇다", score: 1.5 },
      { text: "보통 ..", score: 1 },
      { text: "그렇지 않음", score: 0.5 },
      { text: "매우 그렇지 않음 !!", score: 0 },
    ],
  },
  {
    question: "25. 즐거운 활동(취미 등)은 지난 일주일 동안 몇 번 하셨나요?",
    answers: [
      { text: "1회 미만", score: 0 },
      { text: "1회 이상 2회 미만", score: 1 },
      { text: "2회 이상 3회 미만", score: 1.5 },
      { text: "3회 이상", score: 2 },
    ],
  },
  {
    question: "26. 최근 일주일 동안 기뻤던 날이 있었나요?",
    answers: [
      { text: "2일 미만", score: 0 },
      { text: "2일 이상 4일 미만", score: 1 },
      { text: "4일 이상 6일 미만", score: 1.5 },
      { text: "6일 이상 !!", score: 2 },
    ],
  },
  {
    question: "27. 그럼 일주일 동안 우울한 기분이 든 날은 얼마나 되나요?",
    answers: [
      { text: "2일 미만", score: 2 },
      { text: "2일 이상 4일 미만", score: 1.5 },
      { text: "4일 이상 6일 미만", score: 1 },
      { text: "6일 이상 !!", score: 0 },
    ],
  },
  {
    question:
      "28. 지난 일주일 동안 잠을 충분히 자서 기분이 좋았던 날이 얼마나 되나요?",
    answers: [
      { text: "2일 미만", score: 0 },
      { text: "2일 이상 4일 미만", score: 1 },
      { text: "4일 이상 6일 미만", score: 1.5 },
      { text: "6일 이상 !!", score: 2 },
    ],
  },
  {
    question:
      "29. 최근 일주일 동안 사람들과 함께 시간을 보내며 웃은 적이 있었나요?",
    answers: [
      { text: "2회 미만", score: 0 },
      { text: "2회 이상 4회 미만", score: 1 },
      { text: "4회 이상 6회 미만", score: 1.5 },
      { text: "6회 이상 !!", score: 2 },
    ],
  }
];

let currentQuestionIndex = -1; // 처음은 소개 화면
let totalScore = 0;
let selectedScore = null;

const container = document.querySelector(".container");
const questionElem = document.querySelector(".question");
const buttonGroup = document.querySelector(".button-group");
const nextButton = document.querySelector(".next");

// 초기 화면 세팅
questionElem.textContent =
  "29문항에 답하여 여러분의 행복 점수를 계산해보세요! (데이터를 모아야 해서 설문에 한 번만 응답해주세요 ㅠㅠ)";
buttonGroup.style.display = "none";
nextButton.textContent = "시작하기"; //  버튼 텍스트: 시작하기



function loadQuestion() {
    console.log("점수:", totalScore);  
    
    const current = questions[currentQuestionIndex];
    questionElem.textContent = current.question;
    buttonGroup.innerHTML = "";
    buttonGroup.style.display = "flex";
    selectedScore = null;
    nextButton.disabled = true;
    nextButton.textContent = "다음"; //  질문부터는 항상 '다음'

    current.answers.forEach((answer) => {
        const btn = document.createElement("button");
        btn.classList.add("score-item");
        btn.textContent = answer.text;
        btn.dataset.score = answer.score;

        btn.addEventListener("click", () => {
        selectedScore = answer.score;

        // 모든 버튼 초기화
        buttonGroup.querySelectorAll("button").forEach((b) => {
            b.style.backgroundColor = "#f5f5fa";
            b.style.color = "#7878ab";
            b.style.fontWeight = "400";
        });

        // 선택한 버튼 강조
        btn.style.backgroundColor = "#7878ab";
        btn.style.color = "#fff";
        btn.style.fontWeight = "700";

        nextButton.disabled = false;
        });

        buttonGroup.appendChild(btn);
    });
    }

    // 다음 버튼 클릭 시
    nextButton.addEventListener("click", () => {
    if (currentQuestionIndex === -1) {
        // 처음 화면 -> 질문 시작
        currentQuestionIndex = 0;
        loadQuestion();
        return;
    }

    if (selectedScore === null) return;

    totalScore += selectedScore;
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {

      console.log("최종 점수:", totalScore);
      container.innerHTML =
        `<h2 style='color:#7878ab;'>당신의 행복 점수는 <strong>${totalScore}점</strong> 입니다! </h2>`;
      
    }
    });
