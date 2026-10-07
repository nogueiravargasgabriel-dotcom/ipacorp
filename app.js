"use strict";

const STORAGE_KEY = "danca-corporeidade-carimbo-caderno-vivo";

const questions = [
  {
    id: 1,
    title: "Movimento como linguagem",
    text: `
Ao confrontar a dança com a estrutura de uma obra textual, o excerto discute o estatuto da linguagem corporal nas manifestações humanas. Sob essa perspectiva semiótica, o movimento na dança caracteriza-se por
    `,
    options: {
      A: "constituir um sistema simbólico que articula significados tecidos nas práticas sociais e laborais.",
      B: "reproduzir padrões mecânicos dissociados das experiências históricas do indivíduo em comunidade.",
      C: "atuar como um recurso gestual neutro destinado unicamente à ocupação geométrica do espaço cênico.",
      D: "depender exclusivamente do rigor técnico formal para transmitir mensagens aos espectadores.",
      E: "anular a subjetividade do dançarino em favor da repetição fiel de códigos corporais pré-fixados."
    },
    answer: "A",
    concept: "Linguagem corporal",
    keywords: ["movimento", "cultura", "práticas sociais", "significado"],
    explanation:
      "O texto compara movimentos a palavras e afirma que eles são construídos na cultura, nos hábitos, nas práticas ritualísticas e no trabalho. Por isso, o movimento funciona como linguagem socialmente significada."
  },
  {
    id: 2,
    title: "Corporeidade",
    text: `
Na discussão contemporânea sobre a educação física e os estudos do corpo, o conceito de corporeidade rompe com a visão mecanicista cartesiana ao propor que
    `,
    options: {
      A: "o intelecto comanda o corpo como uma ferramenta puramente passiva diante dos estímulos ambientais.",
      B: "a consciência corporal independe das trocas contínuas e sensoriais que o indivíduo estabelece com o meio.",
      C: "as respostas motoras humanas decorrem estritamente de impulsos reflexos biológicos automáticos.",
      D: "a existência humana se concretiza na integração dialógica entre mente, corpo e mundo circundante.",
      E: "a mente e o aparelho osteomuscular operam de maneira autônoma durante a execução dos atos motores."
    },
    answer: "D",
    concept: "Corporeidade",
    keywords: ["corpo", "cérebro", "sinergia", "mundo"],
    explanation:
      "A corporeidade compreende corpo, cérebro e ambiente como dimensões integradas. Ela rompe com a separação rígida entre mente e corpo."
  },
  {
    id: 3,
    title: "Origens do carimbó",
    text: `
O processo de patrimonialização do carimbó como patrimônio cultural imaterial reflete dinâmicas de formação histórica do Brasil. O texto indica que essa manifestação nortista se consolidou a partir da
    `,
    options: {
      A: "apropriação erudita de tradições cortesãs europeias desprovidas de vínculo com ritos locais.",
      B: "fusão de traços identitários regionais marcados pela presença e ancestralidade sonora nativa.",
      C: "imposição governamental de símbolos folclóricos para homogeneizar a cultura amazônica.",
      D: "padronização mercantil de instrumentos percussivos voltados ao consumo em espetáculos urbanos.",
      E: "substituição gradativa dos instrumentos originários por modelos harmônicos ocidentais."
    },
    answer: "B",
    concept: "Carimbó e identidade regional",
    keywords: ["Pará", "indígena", "curimbó", "ancestralidade"],
    explanation:
      "O carimbó apresenta influências indígenas e seu nome homenageia o curimbó, tambor artesanal utilizado em práticas artísticas e religiosas."
  },
  {
    id: 4,
    title: "Natureza e performance",
    text: `
As narrativas coreográficas da “Pomba com o Gavião” e da “Onça” revelam a intersecção entre arte, natureza e sociedade. No contexto do carimbó tradicional, essas coreografias desempenham a função de
    `,
    options: {
      A: "instruir os integrantes da comunidade sobre técnicas empíricas de abate e domesticação animal.",
      B: "reproduzir objetivamente o equilíbrio ecológico a partir de métodos científicos de observação zoológica.",
      C: "ressignificar as dinâmicas da fauna regional em performances lúdicas e dramáticas de identificação cultural.",
      D: "instituir um modelo hierárquico e rígido de disputa física entre os brincantes da roda.",
      E: "restringir a participação feminina aos papéis de submissão nas encenações agonísticas."
    },
    answer: "C",
    concept: "Natureza e performance",
    keywords: ["fauna", "caça", "personagens", "encenação"],
    explanation:
      "As danças transformam situações envolvendo animais em representações dramáticas, simbólicas e rítmicas realizadas coletivamente."
  },
  {
    id: 5,
    title: "Traje e pertencimento",
    text: `
Em Santarém Novo, a utilização de peças do vestuário formal na dança do carimbó assume um valor que transcende a funcionalidade têxtil. Nesse contexto sociocultural, o traje opera como
    `,
    options: {
      A: "estratégia de padronização cenográfica imposta por agências turísticas do estado.",
      B: "elemento homogeneizador que extingue a diversidade das celebrações populares locais.",
      C: "símbolo comunitário de pertencimento e demarcação de legitimidade da tradição vivenciada.",
      D: "artifício de segregação socioeconômica planejado para vetar o acesso das classes populares ao festejo.",
      E: "vestígio anacrônico que enfraquece a autenticidade das raízes ancestrais indígenas da dança."
    },
    answer: "C",
    concept: "Identidade e vestuário",
    keywords: ["traje", "pertencimento", "legitimidade", "Santarém Novo"],
    explanation:
      "Em Santarém Novo, o traje funciona como símbolo de pertencimento e como forma de legitimar uma tradição própria da localidade."
  },
  {
    id: 6,
    title: "Patrimônio imaterial",
    text: `
A comparação entre as realidades etnográficas de Marapanim e de Santarém Novo elucida a dinâmica de manutenção dos saberes populares. Essa comparação evidencia que o patrimônio imaterial
    `,
    options: {
      A: "conserva-se intacto ao longo das gerações por meio da preservação de suas regras originárias.",
      B: "reconfigura-se continuamente em consonância com as memórias locais e os pactos coletivos.",
      C: "perde seu valor historiográfico no momento em que costumes de lideranças tradicionais desaparecem.",
      D: "depende de normas canônicas e universais para manter sua validade perante as comunidades.",
      E: "entra em declínio inevitável quando desvinculado do calendário litúrgico oficial da Igreja."
    },
    answer: "B",
    concept: "Patrimônio e transformação",
    keywords: ["Marapanim", "Santarém Novo", "tradição", "mudança"],
    explanation:
      "A prática deixou de existir em Marapanim, mas permaneceu em Santarém Novo. Isso demonstra que o patrimônio imaterial muda conforme os contextos e pactos comunitários."
  },
  {
    id: 7,
    title: "Território e memória",
    text: `
Sob a ótica da linguagem corporal e das manifestações populares, a relação entre as singularidades do carimbó, o território e a memória coletiva explicita que
    `,
    options: {
      A: "a memória coletiva de um grupo se desvincula das práticas corporais quando as regras de um rito são formalizadas.",
      B: "as variações locais de uma manifestação cultural constituem desvios que comprometem a integridade da obra artística.",
      C: "o espaço geográfico impõe limites severos à criatividade e à expansão das expressões corporais imateriais.",
      D: "a gestualidade humana reflete as vivências ambientais e os acontecimentos históricos marcados na identidade comunitária.",
      E: "os rituais tradicionais necessitam de isolamento geográfico absoluto para resistirem às influências da modernidade."
    },
    answer: "D",
    concept: "Território e memória",
    keywords: ["território", "ambiente", "memória coletiva", "identidade"],
    explanation:
      "O texto relaciona as formas de dançar aos ambientes, às configurações locais e aos acontecimentos preservados na memória coletiva."
  }
];

const baseMapNodes = [
  {
    id: "linguagem",
    label: "Movimento como\nlinguagem",
    type: "base",
    group: "Linguagem corporal",
    fullText:
      "Os movimentos da dança funcionam como palavras de uma composição e carregam significados construídos culturalmente."
  },
  {
    id: "corporeidade",
    label: "Corpo, cérebro\ne mundo",
    type: "base",
    group: "Corporeidade",
    fullText:
      "A corporeidade compreende a integração entre corpo, cérebro, percepção e ambiente."
  },
  {
    id: "carimbo",
    label: "Carimbó e\nidentidade regional",
    type: "base",
    group: "Carimbó e identidade regional",
    fullText:
      "O carimbó possui origem paraense, influências indígenas e relação com o curimbó, tambor artesanal."
  },
  {
    id: "natureza",
    label: "Natureza e\nperformance",
    type: "base",
    group: "Natureza e performance",
    fullText:
      "As coreografias da Pomba com o Gavião e da Onça transformam animais, caça e conflito em performances dramáticas."
  },
  {
    id: "identidade",
    label: "Traje e\npertencimento",
    type: "base",
    group: "Identidade e vestuário",
    fullText:
      "Em Santarém Novo, as roupas formais funcionam como símbolo de pertencimento e legitimidade comunitária."
  },
  {
    id: "patrimonio",
    label: "Patrimônio e\ntransformação",
    type: "base",
    group: "Patrimônio e transformação",
    fullText:
      "A comparação entre Marapanim e Santarém Novo revela que o patrimônio imaterial é dinâmico e contextual."
  },
  {
    id: "territorio",
    label: "Território e\nmemória",
    type: "base",
    group: "Território e memória",
    fullText:
      "As formas locais do carimbó relacionam-se ao ambiente, ao território e às memórias coletivas."
  }
];

const state = {
  notes: {},
  answers: {},
  quizFinished: false
};

document.addEventListener("DOMContentLoaded", initialize);

function initialize() {
  loadState();
  setupMenu();
  setupGeneralNotes();
  renderQuiz();
  setupActions();
  renderSummary();
  renderMindMap();
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (!saved) {
      return;
    }

    state.notes = saved.notes || {};
    state.answers = saved.answers || {};
    state.quizFinished = Boolean(saved.quizFinished);

    document.querySelectorAll(".note-field").forEach((field) => {
      const noteId = field.dataset.noteId;

      if (noteId && state.notes[noteId]) {
        field.value = state.notes[noteId];
      }
    });
  } catch (error) {
    console.warn("Não foi possível carregar os dados salvos.", error);
  }
}

function saveState() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      notes: state.notes,
      answers: state.answers,
      quizFinished: state.quizFinished
    })
  );
}

function setupMenu() {
  const menuButton = document.querySelector("#menu-button");
  const navigation = document.querySelector("#main-navigation");

  if (!menuButton || !navigation) {
    return;
  }

  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");

    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Fechar menu" : "Abrir menu"
    );
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      navigation.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Abrir menu");
    }
  });
}

function setupGeneralNotes() {
  document.querySelectorAll(".note-field").forEach((field) => {
    field.addEventListener("input", () => {
      const noteId = field.dataset.noteId;

      if (!noteId) {
        return;
      }

      state.notes[noteId] = field.value;
      saveState();
      showSaveStatus(field);
      renderMindMap();
    });
  });
}

function showSaveStatus(field) {
  const status =
    field.id === "general-notes"
      ? document.querySelector("#general-save-status")
      : createTemporaryStatus(field);

  if (!status) {
    return;
  }

  status.textContent = "Anotação salva neste navegador.";

  window.clearTimeout(field.saveStatusTimer);

  field.saveStatusTimer = window.setTimeout(() => {
    status.textContent = "Alterações salvas automaticamente.";
  }, 1400);
}

function createTemporaryStatus(field) {
  let status = field.parentElement.querySelector(".save-status");

  if (!status) {
    status = document.createElement("p");
    status.className = "save-status";
    field.insertAdjacentElement("afterend", status);
  }

  return status;
}

function renderQuiz() {
  const container = document.querySelector("#quiz-container");

  if (!container) {
    return;
  }

  container.innerHTML = questions
    .map((question) => {
      const selectedAnswer = state.answers[question.id];

      const options = Object.entries(question.options)
        .map(([letter, text]) => {
          const checked = selectedAnswer === letter ? "checked" : "";

          return `
            <li>
              <label class="option-label">
                <input
                  type="radio"
                  name="question-${question.id}"
                  value="${letter}"
                  data-question-id="${question.id}"
                  ${checked}
                >
                <span>
                  <strong>${letter})</strong>
                  ${escapeHtml(text)}
                </span>
              </label>
            </li>
          `;
        })
        .join("");

      return `
        <article class="question-card" id="question-card-${question.id}">
          <h3>
            Questão ${question.id}: ${escapeHtml(question.title)}
          </h3>

          <p class="question-text">
            ${escapeHtml(question.text)}
          </p>

          <ul class="options-list">
            ${options}
          </ul>

          <label for="question-note-${question.id}">
            Minhas anotações sobre a questão ${question.id}
          </label>

          <textarea
            id="question-note-${question.id}"
            class="note-field question-note"
            data-note-id="question-${question.id}"
            rows="4"
            placeholder="Registre sua justificativa, dúvida ou estratégia..."
          >${escapeHtml(state.notes[`question-${question.id}`] || "")}</textarea>

          <div
            class="question-feedback"
            id="feedback-${question.id}"
            hidden
          ></div>
        </article>
      `;
    })
    .join("");

  container.querySelectorAll('input[type="radio"]').forEach((input) => {
    input.addEventListener("change", () => {
      state.answers[input.dataset.questionId] = input.value;
      state.quizFinished = false;
      saveState();
      renderMindMap();
    });
  });

  container.querySelectorAll(".question-note").forEach((textarea) => {
    textarea.addEventListener("input", () => {
      state.notes[textarea.dataset.noteId] = textarea.value;
      saveState();
      showSaveStatus(textarea);
      renderMindMap();
    });
  });

  if (state.quizFinished) {
    showCorrections();
  }
}

function finishQuiz() {
  state.quizFinished = true;
  saveState();
  showCorrections();
  renderMindMap();
  renderSummary();
}

function showCorrections() {
  let score = 0;

  questions.forEach((question) => {
    const card = document.querySelector(`#question-card-${question.id}`);
    const feedback = document.querySelector(`#feedback-${question.id}`);
    const selected = state.answers[question.id];

    if (!card || !feedback) {
      return;
    }

    card.classList.remove("is-correct", "is-wrong");

    if (!selected) {
      feedback.hidden = false;
      feedback.innerHTML = `
        <strong>Questão não respondida.</strong>
        <p>
          A resposta correta é ${question.answer}.
          ${escapeHtml(question.explanation)}
        </p>
      `;
      card.classList.add("is-wrong");
      return;
    }

    const isCorrect = selected === question.answer;

    if (isCorrect) {
      score += 1;
      card.classList.add("is-correct");
    } else {
      card.classList.add("is-wrong");
    }

    feedback.hidden = false;
    feedback.innerHTML = `
      <strong>
        ${isCorrect ? "Resposta correta!" : "Resposta para revisar."}
      </strong>
      <p>
        Você marcou <strong>${selected}</strong>.
        A alternativa correta é <strong>${question.answer}</strong>.
      </p>
      <p>${escapeHtml(question.explanation)}</p>
    `;
  });

  showQuizResult(
    `Resultado: ${score} de ${questions.length} questões corretas.`
  );
  renderSummary();
}

function showQuizResult(message) {
  const result = document.querySelector("#quiz-result");

  if (!result) {
    return;
  }

  result.hidden = false;
  result.textContent = message;
}

function resetQuiz() {
  const shouldReset = window.confirm(
    "Deseja realmente limpar as respostas e as correções?"
  );

  if (!shouldReset) {
    return;
  }

  state.answers = {};
  state.quizFinished = false;
  saveState();

  renderQuiz();

  const result = document.querySelector("#quiz-result");

  if (result) {
    result.hidden = true;
    result.textContent = "";
  }

  renderSummary();
  renderMindMap();
}

function setupActions() {
  document
    .querySelector("#finish-quiz")
    ?.addEventListener("click", finishQuiz);

  document
    .querySelector("#reset-quiz")
    ?.addEventListener("click", resetQuiz);

  document
    .querySelector("#generate-summary")
    ?.addEventListener("click", () => {
      renderSummary();
      renderMindMap();

      document.querySelector("#resultado")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });

  document
    .querySelector("#print-page")
    ?.addEventListener("click", () => window.print());

  document
    .querySelector("#copy-notes")
    ?.addEventListener("click", copyNotes);

  document
    .querySelector("#share-whatsapp")
    ?.addEventListener("click", shareWhatsapp);

  document
    .querySelector("#send-email")
    ?.addEventListener("click", sendEmail);

  document
    .querySelector("#close-dialog")
    ?.addEventListener("click", closeDialog);

  document.querySelector("#map-dialog")?.addEventListener("click", (event) => {
    const dialog = document.querySelector("#map-dialog");

    if (event.target === dialog) {
      closeDialog();
    }
  });
}

function renderSummary() {
  const target = document.querySelector("#summary-content");

  if (!target) {
    return;
  }

  const notes = getFilledNotes();
  const score = getScore();
  const reviewQuestions = getReviewQuestions();
  const answeredQuestions = questions.filter(
    (question) => state.answers[question.id]
  );

  const concepts = [
    ...new Set(answeredQuestions.map((question) => question.concept))
  ];

  const notesHtml = notes.length
    ? notes
        .map(([id, text]) => {
          const keywords = extractKeywords(text);

          return `
            <div class="summary-item">
              <strong>${escapeHtml(getNoteTitle(id))}</strong>
              <p>${escapeHtml(text)}</p>
              ${
                keywords.length
                  ? `<small>
                      <strong>Palavras-chave:</strong>
                      ${escapeHtml(keywords.join(", "))}
                    </small>`
                  : ""
              }
            </div>
          `;
        })
        .join("")
    : `
      <div class="summary-item">
        <strong>Ainda não há anotações preenchidas.</strong>
        <p>
          Escreva nos campos do caderno para incluir suas ideias no resumo
          e no mapa mental.
        </p>
      </div>
    `;

  const reviewHtml = reviewQuestions.length
    ? `
      <div class="summary-item">
        <strong>Conteúdos para revisar:</strong>
        <p>
          ${reviewQuestions
            .map(
              (question) => `
                Questão ${question.id} — ${escapeHtml(question.concept)}:
                ${escapeHtml(question.explanation)}
              `
            )
            .join("<br>")}
        </p>
      </div>
    `
    : `
      <div class="summary-item">
        <strong>Pontos para revisar:</strong>
        <p>
          Não há questões incorretas entre as respostas registradas.
        </p>
      </div>
    `;

  target.innerHTML = `
    <div class="summary-item">
      <strong>Seu desempenho</strong>
      <p>
        Você acertou ${score.correct} de ${score.total} questões.
        ${
          state.quizFinished
            ? getPerformanceMessage(score.correct)
            : "Finalize o desafio para receber uma análise completa."
        }
      </p>
    </div>

    <div class="summary-item">
      <strong>Conceitos mobilizados</strong>
      <p>
        ${
          concepts.length
            ? escapeHtml(concepts.join(", "))
            : "Nenhuma questão respondida ainda."
        }
      </p>
    </div>

    <div class="summary-item">
      <strong>Suas anotações analisadas</strong>
      ${notesHtml}
    </div>

    ${reviewHtml}

    <div class="summary-item">
      <strong>Síntese personalizada do capítulo</strong>

      <p>
        A partir do seu percurso, observa-se que você estudou a dança como
        uma linguagem corporal construída nas práticas sociais, nos hábitos,
        nos rituais e no trabalho. Também analisou a corporeidade como
        integração entre corpo, cérebro e mundo, evitando uma visão
        mecanicista do corpo.
      </p>

      <p>
        No estudo do carimbó, aparecem as relações entre a região do Pará,
        as influências indígenas, o curimbó, as narrativas sobre animais,
        os trajes comunitários e as memórias territoriais.
      </p>

      <p>
        A comparação entre Marapanim e Santarém Novo mostra que o patrimônio
        imaterial não é fixo: ele pode desaparecer em um contexto e se
        consolidar como tradição em outro.
      </p>
    </div>
  `;
}

function getFilledNotes() {
  return Object.entries(state.notes).filter(
    ([, text]) => typeof text === "string" && text.trim().length > 0
  );
}

function getScore() {
  let correct = 0;

  questions.forEach((question) => {
    if (state.answers[question.id] === question.answer) {
      correct += 1;
    }
  });

  return {
    correct,
    total: questions.length
  };
}

function getReviewQuestions() {
  return questions.filter(
    (question) => state.answers[question.id] !== question.answer
  );
}

function getPerformanceMessage(score) {
  if (score === questions.length) {
    return "Excelente domínio dos conceitos.";
  }

  if (score >= 5) {
    return "Bom desempenho. Revise os pontos indicados no mapa.";
  }

  if (score >= 3) {
    return "Você já possui uma base. Continue revisando as questões incorretas.";
  }

  return "Use as explicações e anotações para reconstruir os conceitos principais.";
}

function buildPersonalNodes() {
  const nodes = [];

  const sectionNotes = getFilledNotes().filter(
    ([id]) => !id.startsWith("question-") && id !== "general"
  );

  sectionNotes.forEach(([id, text]) => {
    const relatedQuestion = questions.find((question) =>
      question.keywords.some((keyword) =>
        text.toLowerCase().includes(keyword.toLowerCase())
      )
    );

    nodes.push({
      id: `note-${id}`,
      label: `${getNoteTitle(id)}\n${shortenText(text, 30)}`,
      type: "note",
      group: relatedQuestion?.concept || getNoteTitle(id),
      fullText: text,
      keywords: extractKeywords(text)
    });
  });

  const generalNote = state.notes.general?.trim();

  if (generalNote) {
    nodes.push({
      id: "note-general",
      label: `Anotação geral\n${shortenText(generalNote, 30)}`,
      type: "note",
      group: "Anotação geral",
      fullText: generalNote,
      keywords: extractKeywords(generalNote)
    });
  }

  questions.forEach((question) => {
    const answer = state.answers[question.id];

    if (!answer) {
      return;
    }

    const isCorrect = answer === question.answer;

    nodes.push({
      id: `question-${question.id}`,
      label: `Questão ${question.id}\n${isCorrect ? "Acerto" : "Revisar"}`,
      type: isCorrect ? "correct" : "review",
      group: question.concept,
      fullText: isCorrect
        ? `Você marcou a alternativa ${answer}, que está correta. Conceito: ${question.concept}.`
        : `Você marcou a alternativa ${answer}. A resposta correta é ${question.answer}. ${question.explanation}`,
      questionId: question.id
    });
  });

  return nodes;
}

function getNoteTitle(id) {
  const titles = {
    general: "Anotações gerais",
    introducao: "Movimento e linguagem",
    corporeidade: "Corporeidade",
    carimbo: "Carimbó",
    natureza: "Natureza e dança",
    trajes: "Trajes e pertencimento",
    tradicao: "Tradição e mudança",
    territorio: "Território e memória"
  };

  if (id.startsWith("question-")) {
    return `Anotação da ${id.replace("question-", "questão ")}`;
  }

  return titles[id] || "Anotação";
}

function extractKeywords(text) {
  const stopWords = new Set([
    "sobre",
    "como",
    "para",
    "uma",
    "isso",
    "esse",
    "essa",
    "este",
    "esta",
    "porque",
    "quando",
    "também",
    "entre",
    "pelas",
    "pelos",
    "muito",
    "mais"
  ]);

  return [
    ...new Set(
      text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^\p{L}\p{N}\s]/gu, "")
        .split(/\s+/)
        .filter(
          (word) => word.length >= 5 && !stopWords.has(word)
        )
    )
  ].slice(0, 6);
}

function renderMindMap() {
  const svg = document.querySelector("#mind-map");
  const accessibleList = document.querySelector("#map-accessible-list");

  if (!svg || !accessibleList) {
    return;
  }

  svg.innerHTML = "";

  const personalNodes = buildPersonalNodes();
  const nodes = [...baseMapNodes, ...personalNodes];

  const center = {
    x: 550,
    y: 360,
    radius: 92,
    id: "root",
    label: "Dança,\ncorporeidade\ne carimbó",
    type: "root",
    fullText:
      "Mapa geral sobre movimento como linguagem, corporeidade, carimbó, identidade, território, memória e patrimônio cultural."
  };

  const positionedNodes = positionNodes(nodes);

  drawLinkLines(svg, center, positionedNodes);
  drawMapNode(svg, center);

  positionedNodes.forEach((node) => {
    drawMapNode(svg, node);
  });

  accessibleList.innerHTML = `
    <h4>Versão textual do mapa</h4>
    <p>
      <strong>Dança, corporeidade e carimbó</strong>
    </p>

    <ul>
      ${nodes
        .map(
          (node) => `
            <li>
              <strong>
                ${escapeHtml(node.label.replaceAll("\n", " — "))}
              </strong>
              ${
                node.fullText
                  ? `: ${escapeHtml(shortenText(node.fullText, 180))}`
                  : ""
              }
            </li>
          `
        )
        .join("")}
    </ul>
  `;
}

function positionNodes(nodes) {
  const positioned = [];

  const baseNodes = nodes.filter((node) => node.type === "base");
  const personalNodes = nodes.filter((node) => node.type !== "base");

  const centerX = 550;
  const centerY = 360;
  const radius = 250;

  baseNodes.forEach((node, index) => {
    const angle =
      -Math.PI / 2 + index * ((Math.PI * 2) / baseNodes.length);

    positioned.push({
      ...node,
      x: centerX + Math.cos(angle) * radius,
      y: centerY + Math.sin(angle) * radius,
      radius: 67
    });
  });

  personalNodes.forEach((node, index) => {
    const relatedBase = positioned.find(
      (baseNode) =>
        baseNode.group === node.group ||
        baseNode.group?.includes(node.group) ||
        node.group?.includes(baseNode.group)
    );

    const baseX = relatedBase?.x || centerX;
    const baseY = relatedBase?.y || centerY;

    const angle = (index % 4) * 1.57;
    const distance = 120 + Math.floor(index / 4) * 36;

    positioned.push({
      ...node,
      x: baseX + Math.cos(angle) * distance,
      y: baseY + Math.sin(angle) * distance,
      radius: 54
    });
  });

  return positioned;
}

function drawLinkLines(svg, center, nodes) {
  nodes.forEach((node) => {
    const line = createSvgElement("line", {
      x1: center.x,
      y1: center.y,
      x2: node.x,
      y2: node.y,
      class: "map-link"
    });

    svg.appendChild(line);
  });

  const baseNodes = nodes.filter((node) => node.type === "base");
  const personalNodes = nodes.filter((node) => node.type !== "base");

  personalNodes.forEach((node) => {
    const relatedBase = baseNodes.find(
      (baseNode) =>
        baseNode.group === node.group ||
        baseNode.group?.includes(node.group) ||
        node.group?.includes(baseNode.group)
    );

    if (!relatedBase) {
      return;
    }

    const line = createSvgElement("line", {
      x1: relatedBase.x,
      y1: relatedBase.y,
      x2: node.x,
      y2: node.y,
      class: "map-link map-personal-link"
    });

    svg.appendChild(line);
  });
}

function drawMapNode(svg, node) {
  const group = createSvgElement("g", {
    class: `map-node ${node.type}`,
    tabindex: "0",
    role: "button",
    "aria-label": node.label.replaceAll("\n", " — ")
  });

  const circle = createSvgElement("circle", {
    cx: node.x,
    cy: node.y,
    r: node.radius
  });

  group.appendChild(circle);

  const lines = node.label.split("\n");

  lines.forEach((line, index) => {
    const text = createSvgElement("text", {
      x: node.x,
      y: node.y + (index - (lines.length - 1) / 2) * 17
    });

    text.textContent = line;
    group.appendChild(text);
  });

  group.addEventListener("click", () => {
    if (node.fullText) {
      openDialog(
        node.label.replaceAll("\n", " "),
        node.fullText
      );
    }
  });

  group.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();

      if (node.fullText) {
        openDialog(
          node.label.replaceAll("\n", " "),
          node.fullText
        );
      }
    }
  });

  svg.appendChild(group);
}

function createSvgElement(tag, attributes) {
  const element = document.createElementNS(
    "http://www.w3.org/2000/svg",
    tag
  );

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });

  return element;
}

function openDialog(title, content) {
  const dialog = document.querySelector("#map-dialog");
  const dialogTitle = document.querySelector("#dialog-title");
  const dialogContent = document.querySelector("#dialog-content");

  if (!dialog || !dialogTitle || !dialogContent) {
    return;
  }

  dialogTitle.textContent = title;
  dialogContent.textContent = content;

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }
}

function closeDialog() {
  const dialog = document.querySelector("#map-dialog");

  if (!dialog) {
    return;
  }

  if (typeof dialog.close === "function") {
    dialog.close();
  } else {
    dialog.removeAttribute("open");
  }
}

async function copyNotes() {
  const text = createPlainTextSummary();

  try {
    await navigator.clipboard.writeText(text);
    window.alert("Anotações copiadas para a área de transferência.");
  } catch (error) {
    window.alert(
      "Não foi possível copiar automaticamente. Tente selecionar e copiar o conteúdo manualmente."
    );
  }
}

function shareWhatsapp() {
  const text = encodeURIComponent(createPlainTextSummary());
  const url = `https://wa.me/?text=${text}`;

  window.open(url, "_blank", "noopener,noreferrer");
}

function sendEmail() {
  const subject = encodeURIComponent(
    "Meu estudo sobre dança, corporeidade e carimbó"
  );

  const body = encodeURIComponent(createPlainTextSummary());

  window.location.href = `mailto:?subject=${subject}&body=${body}`;
}

function createPlainTextSummary() {
  const score = getScore();
  const notes = getFilledNotes();

  const noteText = notes.length
    ? notes
        .map(([id, text]) => `${getNoteTitle(id)}:\n${text}`)
        .join("\n\n")
    : "Nenhuma anotação preenchida.";

  const reviewText = getReviewQuestions()
    .map(
      (question) =>
        `Questão ${question.id} — ${question.concept}: ${question.explanation}`
    )
    .join("\n");

  return `DANÇA, CORPOREIDADE E CARIMBÓ

Desempenho: ${score.correct} de ${score.total} questões corretas.

ANOTAÇÕES:
${noteText}

PONTOS PARA REVISAR:
${reviewText || "Nenhum ponto de revisão identificado."}

SÍNTESE:
A dança pode ser compreendida como linguagem corporal, pois seus movimentos são construídos culturalmente e carregam significados. A corporeidade integra corpo, cérebro e mundo. O carimbó, originado no Pará com influências indígenas, relaciona identidade, memória, território, natureza, vestuário e patrimônio imaterial.`;
}

function shortenText(text, maxLength) {
  const cleanText = String(text).replace(/\s+/g, " ").trim();

  if (cleanText.length <= maxLength) {
    return cleanText;
  }

  return `${cleanText.slice(0, maxLength - 1)}…`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&")
    .replaceAll("<", "<")
    .replaceAll(">", ">")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}