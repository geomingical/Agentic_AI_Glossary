window.glossaryTerms = [
  {
    term: "Large Language Model",
    zh: "大語言模型",
    category: "foundation",
    summary: "能理解與生成語言的核心模型，是多數 agentic AI 系統的大腦。",
    analogy: "清潔團隊裡受過完整訓練的領班，能聽懂複雜要求並判斷下一步。",
    definition: "A language model trained on large-scale text and other data to generate, transform, classify, and reason over natural language.",
    related: ["Model", "Agent", "Prompt", "Token"],
    tags: ["LLM", "model", "chatgpt", "claude", "foundation"]
  },
  {
    term: "Token",
    zh: "標記",
    category: "performance",
    summary: "模型讀寫文字時的基本單位，也是成本與上下文容量的計算基礎。",
    analogy: "清潔劑的用量；講越多、想越久，消耗越多。",
    definition: "A chunk of text or data used by a model for input and output accounting, context limits, and pricing.",
    related: ["Context Window", "Cost", "Latency"],
    tags: ["cost", "context", "pricing"]
  },
  {
    term: "Model",
    zh: "模型",
    category: "foundation",
    summary: "執行判斷、生成、推理或分類的 AI 能力核心。",
    analogy: "清潔人員的能力等級與腦袋，不同模型像不同經驗與專長的人。",
    definition: "A trained computational system that maps inputs to outputs such as text, decisions, classifications, or actions.",
    related: ["Large Language Model", "Evaluation", "Benchmark"],
    tags: ["ai", "model", "capability"]
  },
  {
    term: "API",
    zh: "應用程式介面",
    category: "foundation",
    summary: "讓程式呼叫模型或外部服務的標準入口。",
    analogy: "對外叫修專線或門口插座，讓清潔團隊能接上外部設備。",
    definition: "A structured interface that lets software systems request services, exchange data, or trigger actions.",
    related: ["SDK", "Tool Use", "Connector"],
    tags: ["integration", "interface", "service"]
  },
  {
    term: "SDK",
    zh: "開發套件",
    category: "foundation",
    summary: "幫開發者更快使用 API 或建立 agentic AI 應用的工具包。",
    analogy: "加盟清潔公司的標準工具箱，裡面有合約範本、制服、流程表與基礎配備。",
    definition: "A software development kit containing libraries, examples, and utilities for building applications on a platform.",
    related: ["API", "Framework", "Orchestration"],
    tags: ["developer", "library", "toolkit"]
  },
  {
    term: "Framework",
    zh: "框架",
    category: "foundation",
    summary: "用來組裝 agent、工具、流程與狀態管理的開發骨架。",
    analogy: "清潔公司的作業制度，規定接案、分工、回報與驗收怎麼進行。",
    definition: "A reusable structure and set of conventions for building applications, workflows, or agent systems.",
    related: ["SDK", "Workflow", "Orchestration"],
    tags: ["langgraph", "crewai", "autogen", "architecture"]
  },
  {
    term: "Agent",
    zh: "代理智能體",
    category: "foundation",
    summary: "能根據目標自主規劃、使用工具並回報結果的 AI 單位。",
    analogy: "被指派任務的清潔專家，例如洗窗戶、整理倉庫或修水管的人。",
    definition: "An AI system component that can pursue goals, make decisions, call tools, and adapt its next steps based on feedback.",
    related: ["Autonomy", "Tool Use", "Planning", "Human-in-the-loop"],
    tags: ["agentic", "worker", "executor"]
  },
  {
    term: "Multi-Agent System",
    zh: "多智能體系統",
    category: "foundation",
    summary: "由多個 agent 協作完成任務的系統。",
    analogy: "一整支清潔團隊，有領班、窗戶專家、地板專家與驗收人員。",
    definition: "A system where multiple agents coordinate, divide responsibilities, exchange information, or review each other's work.",
    related: ["Agent", "Manager Agent", "Orchestration"],
    tags: ["team", "collaboration", "agentic"]
  },
  {
    term: "Manager Agent",
    zh: "管理型智能體",
    category: "foundation",
    summary: "負責拆解目標、分派任務與整合結果的 agent。",
    analogy: "清潔領班，決定先掃哪裡、誰去處理、何時驗收。",
    definition: "An agent responsible for coordinating other agents, planning execution order, and synthesizing outputs.",
    related: ["Agent", "Planning", "Task Decomposition"],
    tags: ["manager", "coordinator", "orchestrator"]
  },
  {
    term: "Workflow",
    zh: "工作流程",
    category: "foundation",
    summary: "任務從輸入、處理、檢查到輸出的步驟安排。",
    analogy: "大掃除流程表：先清天花板，再吸地，最後拖地與驗收。",
    definition: "A defined sequence of steps, decisions, and handoffs that produces a desired output.",
    related: ["Planning", "Orchestration", "State"],
    tags: ["process", "pipeline", "flow"]
  },
  {
    term: "MCP",
    zh: "模型上下文協議",
    category: "foundation",
    summary: "讓 AI 應用用標準方式連接工具、資料與外部系統的協議。",
    analogy: "萬用清潔接頭，讓團隊能無縫連上不同品牌的設備或資料庫。",
    definition: "Model Context Protocol is a standard interface for connecting AI applications to tools, data sources, and contextual services.",
    related: ["Tool Use", "Connector", "API"],
    tags: ["protocol", "integration", "tools"]
  },
  {
    term: "Function Calling",
    zh: "函式呼叫",
    category: "foundation",
    summary: "模型用結構化方式要求程式執行某個函式或工具。",
    analogy: "領班不是自己修水管，而是填好工單叫水管師傅來。",
    definition: "A mechanism where a model produces structured arguments that software uses to call functions or tools.",
    related: ["Tool Use", "API", "Structured Output"],
    tags: ["tools", "json", "automation"]
  },
  {
    term: "Orchestration",
    zh: "編排",
    category: "foundation",
    summary: "安排多個模型、工具、agent 與步驟如何協作。",
    analogy: "清潔總控台，安排誰先進場、誰等待、結果交給誰檢查。",
    definition: "The coordination layer that controls execution order, routing, state, retries, and handoffs across components.",
    related: ["Workflow", "Manager Agent", "State"],
    tags: ["coordination", "routing", "architecture"]
  },
  {
    term: "Prompt",
    zh: "提示詞",
    category: "reasoning",
    summary: "給模型的任務說明、背景、限制與輸出要求。",
    analogy: "你給清潔團隊的工作守則：哪些地方要清、哪些東西不能碰。",
    definition: "Instructions and context supplied to a model to guide its behavior and output.",
    related: ["System Prompt", "Context Engineering", "Guardrails"],
    tags: ["instruction", "prompting", "rules"]
  },
  {
    term: "System Prompt",
    zh: "系統提示詞",
    category: "reasoning",
    summary: "比一般使用者訊息更高層的角色與行為規則。",
    analogy: "清潔員工入職守則，規定說話方式、禁忌與工作範圍。",
    definition: "A high-priority instruction that defines model role, constraints, and behavior across a session or task.",
    related: ["Prompt", "Guardrails", "Policy"],
    tags: ["system", "instruction", "behavior"]
  },
  {
    term: "Planning",
    zh: "規劃",
    category: "reasoning",
    summary: "決定完成目標需要哪些步驟與順序。",
    analogy: "先決定從天花板、窗戶、地板還是廚房開始打掃。",
    definition: "The process of selecting actions, ordering steps, and adapting execution toward a goal.",
    related: ["Task Decomposition", "Workflow", "Agent"],
    tags: ["plan", "steps", "reasoning"]
  },
  {
    term: "Task Decomposition",
    zh: "任務拆解",
    category: "reasoning",
    summary: "把大任務切成可執行的小任務。",
    analogy: "把大掃除拆成丟垃圾、擦窗、洗地、整理櫃子。",
    definition: "Breaking a complex goal into smaller subtasks that can be assigned, executed, and checked.",
    related: ["Planning", "Manager Agent", "Workflow"],
    tags: ["breakdown", "subtasks", "planning"]
  },
  {
    term: "Reasoning",
    zh: "推理",
    category: "reasoning",
    summary: "根據資訊做判斷、比較、推導與決策。",
    analogy: "看到地板濕，就推斷應先拿乾布而不是直接拖地。",
    definition: "The use of information and intermediate judgments to reach conclusions or choose actions.",
    related: ["Planning", "Reflection", "Evaluation"],
    tags: ["thinking", "decision", "logic"]
  },
  {
    term: "Chain-of-Thought",
    zh: "思維鏈",
    category: "reasoning",
    summary: "模型產生或使用中間推理步驟來處理問題。",
    analogy: "清潔員在心裡一步步想：先移家具，再吸灰塵，最後拖地。",
    definition: "Intermediate reasoning traces or stepwise reasoning used to support complex problem solving.",
    related: ["Reasoning", "Planning", "Reflection"],
    tags: ["cot", "reasoning", "steps"]
  },
  {
    term: "ReAct",
    zh: "推理與行動循環",
    category: "reasoning",
    summary: "讓模型在思考、行動、觀察之間循環，逐步完成任務。",
    analogy: "先判斷污漬，拿工具試清，觀察結果，再決定下一步。",
    definition: "A pattern where an agent alternates reasoning, tool actions, and observations to solve tasks.",
    related: ["Tool Use", "Reasoning", "Agent"],
    tags: ["reason", "act", "loop"]
  },
  {
    term: "Reflection",
    zh: "反思",
    category: "reasoning",
    summary: "模型檢查自己前一步結果並嘗試改善。",
    analogy: "掃完後回頭看，發現角落還有灰塵，就補掃一次。",
    definition: "A process where a model or agent critiques prior outputs or actions to improve subsequent work.",
    related: ["Self-Correction", "Evaluation", "Trace"],
    tags: ["review", "critique", "improvement"]
  },
  {
    term: "Self-Correction",
    zh: "自我修正",
    category: "reasoning",
    summary: "系統發現錯誤後主動修改答案、計畫或行動。",
    analogy: "清潔員發現用了錯清潔劑，停下來換方法處理。",
    definition: "The ability or workflow step where an AI system detects and corrects errors in its own output or process.",
    related: ["Reflection", "Evaluation", "Reliability"],
    tags: ["correction", "quality", "review"]
  },
  {
    term: "Goal",
    zh: "目標",
    category: "reasoning",
    summary: "agentic AI 被要求達成的最終結果。",
    analogy: "不是叫它掃三下，而是說：把客廳整理到能招待客人。",
    definition: "A desired outcome that guides planning, tool use, and evaluation in an agentic system.",
    related: ["Agent", "Planning", "Evaluation"],
    tags: ["objective", "outcome", "task"]
  },
  {
    term: "Autonomy",
    zh: "自主性",
    category: "reasoning",
    summary: "系統在限制內自行決定下一步的能力。",
    analogy: "清潔團隊不用每掃一塊地都問你，但碰到貴重物品會停下來。",
    definition: "The degree to which a system can select actions and continue execution without direct step-by-step human instruction.",
    related: ["Agent", "Human-in-the-loop", "Guardrails"],
    tags: ["autonomous", "agentic", "control"]
  },
  {
    term: "Tool Use",
    zh: "工具使用",
    category: "tools",
    summary: "模型或 agent 呼叫外部工具來取得資訊或執行動作。",
    analogy: "清潔員拿起吸塵器、抹布、鋼刷或電話，而不是只靠嘴巴說。",
    definition: "The ability of an AI system to call external functions, services, applications, or devices.",
    related: ["Tool", "Function Calling", "MCP"],
    tags: ["tools", "actions", "automation"]
  },
  {
    term: "Tool",
    zh: "工具",
    category: "tools",
    summary: "agent 可以呼叫的外部能力，例如搜尋、讀檔、寄信或執行程式。",
    analogy: "吸塵器、抹布、梯子、電話或水管鉗。",
    definition: "A callable capability exposed to an AI system for retrieving information, transforming data, or performing actions.",
    related: ["Tool Use", "API", "Permission"],
    tags: ["capability", "external", "action"]
  },
  {
    term: "Skill",
    zh: "技能",
    category: "tools",
    summary: "封裝好的專門工作流程或能力。",
    analogy: "清潔員受過的專業訓練，例如除霉、打蠟或清大理石。",
    definition: "A reusable capability, instruction set, or workflow package that helps an agent perform specialized tasks.",
    related: ["Tool", "Agent", "Workflow"],
    tags: ["capability", "workflow", "specialist"]
  },
  {
    term: "RAG",
    zh: "檢索增強生成",
    category: "tools",
    summary: "先查資料，再根據查到的內容生成答案。",
    analogy: "清潔員遇到不熟的污漬，先翻百科或施工手冊再動手。",
    definition: "Retrieval-augmented generation combines information retrieval with model generation to ground outputs in external sources.",
    related: ["Vector Database", "Embedding", "Grounding"],
    tags: ["retrieval", "knowledge", "rag"]
  },
  {
    term: "Vector Database",
    zh: "向量資料庫",
    category: "tools",
    summary: "用語意相似度查找資料的資料庫。",
    analogy: "不是照書名找清潔手冊，而是找內容最像目前問題的那幾頁。",
    definition: "A database optimized for storing embeddings and retrieving items by semantic similarity.",
    related: ["Embedding", "RAG", "Knowledge Base"],
    tags: ["vector", "database", "search"]
  },
  {
    term: "Embedding",
    zh: "嵌入向量",
    category: "tools",
    summary: "把文字、圖片或資料轉成可比較相似度的數字表示。",
    analogy: "把每種污漬做成特徵指紋，方便找到相似案例。",
    definition: "A numeric representation of data that captures semantic or structural similarity for search and comparison.",
    related: ["Vector Database", "RAG", "Grounding"],
    tags: ["semantic", "representation", "search"]
  },
  {
    term: "Knowledge Base",
    zh: "知識庫",
    category: "tools",
    summary: "系統可查詢的文件、規則、資料或案例集合。",
    analogy: "清潔團隊的工作手冊、客戶偏好、維修紀錄與材料說明書。",
    definition: "A curated collection of information used by systems or users to answer questions and support decisions.",
    related: ["RAG", "Long-term Memory", "Grounding"],
    tags: ["docs", "knowledge", "source"]
  },
  {
    term: "Browser Automation",
    zh: "瀏覽器自動化",
    category: "tools",
    summary: "讓 agent 操作網頁、點擊、填表或擷取資訊。",
    analogy: "清潔員能自己去櫃台查門禁、填表、領鑰匙，而不是只聽你口述。",
    definition: "Programmatic control of a web browser to navigate pages, interact with UI, and collect or submit information.",
    related: ["Tool Use", "Connector", "Sandbox"],
    tags: ["browser", "web", "automation"]
  },
  {
    term: "Code Interpreter",
    zh: "程式執行器",
    category: "tools",
    summary: "讓模型執行程式來計算、分析或產生檔案。",
    analogy: "清潔團隊旁邊有一台工作機，可以實際切割、測量、計算用量。",
    definition: "An execution environment where a model can run code to compute results, analyze data, or create artifacts.",
    related: ["Sandbox", "Tool Use", "Permission"],
    tags: ["code", "python", "execution"]
  },
  {
    term: "Connector",
    zh: "連接器",
    category: "tools",
    summary: "把 agentic AI 接到 Gmail、GitHub、日曆、資料庫等外部系統。",
    analogy: "清潔團隊持有合法鑰匙卡，可以進指定房間或查指定倉庫。",
    definition: "An integration component that gives an AI system controlled access to an external service or data source.",
    related: ["API", "MCP", "Permission"],
    tags: ["integration", "service", "access"]
  },
  {
    term: "Context Window",
    zh: "上下文視窗",
    category: "memory",
    summary: "模型一次能看見並處理的資訊容量。",
    analogy: "清潔領班一次能記住多少房間細節；太多就會忘記客廳剛剛說過什麼。",
    definition: "The maximum amount of input and output context a model can process in a single interaction or run.",
    related: ["Token", "Context Engineering", "Short-term Memory"],
    tags: ["context", "memory", "limit"]
  },
  {
    term: "Context Engineering",
    zh: "上下文工程",
    category: "memory",
    summary: "設計哪些資訊該放進模型上下文，以及如何放。",
    analogy: "把今天任務、房屋格局、禁忌與工具清單整理成領班看得懂的工作夾。",
    definition: "The discipline of selecting, structuring, compressing, and updating context supplied to AI systems.",
    related: ["Prompt", "RAG", "Context Window"],
    tags: ["context", "prompting", "design"]
  },
  {
    term: "Short-term Memory",
    zh: "短期記憶",
    category: "memory",
    summary: "系統在當前任務或對話中暫時保留的資訊。",
    analogy: "今天的工作記事本：剛洗完碗，接下來該掃廁所。",
    definition: "Temporary information retained for the current session, task, or interaction.",
    related: ["Context Window", "State", "Session"],
    tags: ["memory", "session", "temporary"]
  },
  {
    term: "Long-term Memory",
    zh: "長期記憶",
    category: "memory",
    summary: "跨任務或跨時間保存的偏好、事實或經驗。",
    analogy: "記住這家主人不喜歡漂白水味，以後每次來都避開。",
    definition: "Persistent information stored beyond a single session for future personalization or task continuity.",
    related: ["Knowledge Base", "Semantic Memory", "Data Privacy"],
    tags: ["memory", "persistent", "personalization"]
  },
  {
    term: "State",
    zh: "狀態",
    category: "memory",
    summary: "系統目前知道的任務進度、變數與中間結果。",
    analogy: "工作白板上標記哪些房間已清、哪些等待驗收、哪些卡住。",
    definition: "The current representation of progress, variables, decisions, and intermediate outputs in a workflow.",
    related: ["Workflow", "Orchestration", "Session"],
    tags: ["state", "progress", "workflow"]
  },
  {
    term: "Session",
    zh: "工作階段",
    category: "memory",
    summary: "一段連續互動或任務執行期間。",
    analogy: "今天這次到府清潔的整個服務時段。",
    definition: "A bounded period of interaction or execution with shared context and state.",
    related: ["Short-term Memory", "State", "Context Window"],
    tags: ["session", "interaction", "context"]
  },
  {
    term: "Episodic Memory",
    zh: "事件記憶",
    category: "memory",
    summary: "保存過去發生過的任務、事件或操作經驗。",
    analogy: "上次來這間房時，浴室排水孔特別容易堵住的記錄。",
    definition: "Memory organized around past events, interactions, or task episodes.",
    related: ["Long-term Memory", "Trace", "Audit Log"],
    tags: ["memory", "episodes", "history"]
  },
  {
    term: "Semantic Memory",
    zh: "語意記憶",
    category: "memory",
    summary: "保存一般知識、偏好或抽象事實。",
    analogy: "知道木地板不能用太濕的拖把，這不是單一事件而是通用知識。",
    definition: "Memory organized around durable facts, concepts, preferences, or general knowledge.",
    related: ["Long-term Memory", "Knowledge Base", "Embedding"],
    tags: ["memory", "facts", "knowledge"]
  },
  {
    term: "Latency",
    zh: "延遲",
    category: "performance",
    summary: "系統從收到請求到產生回應或完成動作所花的時間。",
    analogy: "你叫清潔員開始掃地，她站在原地發呆十秒才動手。",
    definition: "The elapsed time between an input, request, or action trigger and the system's response.",
    related: ["Token", "Cost", "Inference"],
    tags: ["speed", "performance", "delay"]
  },
  {
    term: "Cost",
    zh: "成本",
    category: "performance",
    summary: "使用模型、工具、資料或運算資源產生的費用。",
    analogy: "清潔工時、清潔劑、外包師傅與工具租借費。",
    definition: "The monetary or resource expense associated with running models, tools, storage, and workflows.",
    related: ["Token", "Latency", "Evaluation"],
    tags: ["budget", "pricing", "resource"]
  },
  {
    term: "Evaluation",
    zh: "評估",
    category: "performance",
    summary: "檢查 AI 系統輸出是否正確、有用、安全與穩定。",
    analogy: "完工驗收：看窗戶是否乾淨、物品是否歸位、是否有破壞。",
    definition: "The process of measuring AI system quality against criteria, test sets, rubrics, or human judgments.",
    related: ["Benchmark", "Reliability", "Observability"],
    tags: ["eval", "quality", "testing"]
  },
  {
    term: "Benchmark",
    zh: "基準測試",
    category: "performance",
    summary: "用固定任務或資料集比較模型或系統表現。",
    analogy: "用同一間樣品屋測試不同清潔團隊誰更快、更乾淨。",
    definition: "A standardized test or dataset used to compare performance across models, systems, or methods.",
    related: ["Evaluation", "Accuracy", "Model"],
    tags: ["test", "comparison", "metric"]
  },
  {
    term: "Observability",
    zh: "可觀測性",
    category: "performance",
    summary: "讓開發者看見系統內部流程、工具呼叫與錯誤原因。",
    analogy: "清潔現場有監控與工作紀錄，知道誰進哪個房間、做了什麼。",
    definition: "The ability to inspect system behavior through logs, traces, metrics, and run histories.",
    related: ["Trace", "Audit Log", "Evaluation"],
    tags: ["logs", "monitoring", "debug"]
  },
  {
    term: "Trace",
    zh: "執行軌跡",
    category: "performance",
    summary: "記錄 agent 執行任務時的步驟、工具呼叫與中間結果。",
    analogy: "清潔流程紀錄表：幾點進廚房、用了什麼工具、結果如何。",
    definition: "A chronological record of an AI system's intermediate steps, tool calls, inputs, and outputs.",
    related: ["Observability", "Audit Log", "Reflection"],
    tags: ["trace", "debug", "history"]
  },
  {
    term: "Hallucination",
    zh: "幻覺",
    category: "performance",
    summary: "模型生成看似合理但其實不正確或無根據的內容。",
    analogy: "員工把地毯花紋當成污漬狂刷，或堅稱已掃過其實沒動。",
    definition: "A model output that is unsupported, fabricated, or inconsistent with reliable evidence.",
    related: ["Grounding", "RAG", "Evaluation"],
    tags: ["error", "fabrication", "quality"]
  },
  {
    term: "Grounding",
    zh: "根據化",
    category: "performance",
    summary: "讓模型輸出有資料來源、文件或觀察結果支撐。",
    analogy: "清潔員不是憑印象說明，而是指著手冊、照片或現場證據。",
    definition: "The practice of tying model outputs to retrieved sources, observed facts, or structured evidence.",
    related: ["RAG", "Hallucination", "Knowledge Base"],
    tags: ["evidence", "source", "rag"]
  },
  {
    term: "Accuracy",
    zh: "準確性",
    category: "performance",
    summary: "輸出或行動符合事實與需求的程度。",
    analogy: "該擦的是窗戶不是電視，該丟的是垃圾不是重要文件。",
    definition: "The degree to which outputs or actions are correct with respect to facts, labels, requirements, or expected behavior.",
    related: ["Evaluation", "Benchmark", "Reliability"],
    tags: ["correctness", "quality", "metric"]
  },
  {
    term: "Reliability",
    zh: "可靠性",
    category: "performance",
    summary: "系統能穩定產生可接受結果的程度。",
    analogy: "每次請同一團隊來，都能按規則完成，不會今天好明天亂。",
    definition: "The consistency with which a system performs correctly under expected conditions.",
    related: ["Evaluation", "Observability", "Guardrails"],
    tags: ["stability", "quality", "production"]
  },
  {
    term: "Drift",
    zh: "漂移",
    category: "performance",
    summary: "系統表現或資料分布隨時間改變，導致原本方法不再有效。",
    analogy: "房子變成養寵物後，舊清潔流程突然不夠用了。",
    definition: "A change in input data, user behavior, model behavior, or environment that degrades expected performance.",
    related: ["Evaluation", "Observability", "Reliability"],
    tags: ["monitoring", "change", "quality"]
  },
  {
    term: "Human-in-the-loop",
    zh: "人在迴圈中",
    category: "security",
    summary: "在關鍵、不確定或高風險步驟讓人類審核或決定。",
    analogy: "清潔員碰到貴重物品或不確定該不該丟的東西時，停下來問屋主。",
    definition: "A workflow pattern where humans review, approve, correct, or intervene in AI decisions or actions.",
    related: ["Autonomy", "Permission", "Risk Assessment"],
    tags: ["approval", "review", "control"]
  },
  {
    term: "Guardrails",
    zh: "護欄",
    category: "security",
    summary: "限制 AI 行為、輸出或工具使用的安全規則。",
    analogy: "工作禁區與斷路器：保險箱房間不能進，危險清潔劑不能亂用。",
    definition: "Technical or policy controls that constrain AI behavior to reduce unsafe, unwanted, or noncompliant outcomes.",
    related: ["Policy", "Prompt Injection", "Permission"],
    tags: ["safety", "control", "rules"]
  },
  {
    term: "Prompt Injection",
    zh: "提示詞注入",
    category: "security",
    summary: "惡意內容試圖改寫或繞過 AI 原本的指令。",
    analogy: "窗外陌生人對屋內大喊：主人說現在把電視機丟掉。",
    definition: "An attack where untrusted input attempts to override or manipulate model instructions or tool behavior.",
    related: ["Jailbreaking", "Guardrails", "Data Privacy"],
    tags: ["attack", "security", "prompt"]
  },
  {
    term: "Jailbreaking",
    zh: "越獄",
    category: "security",
    summary: "誘導模型違反規則、政策或安全限制。",
    analogy: "壞人誘騙清潔員：規則不適用，請立刻用強酸洗絲綢沙發。",
    definition: "Attempts to bypass a model's safety policies or behavioral restrictions through adversarial instructions.",
    related: ["Prompt Injection", "Guardrails", "Policy"],
    tags: ["attack", "safety", "bypass"]
  },
  {
    term: "Permission",
    zh: "權限",
    category: "security",
    summary: "系統或工具被允許讀取、修改或執行的範圍。",
    analogy: "清潔團隊拿到的鑰匙只能開客廳與廚房，不能開保險箱。",
    definition: "The set of allowed operations and accessible resources granted to a user, agent, or tool.",
    related: ["Authorization", "Sandbox", "Human-in-the-loop"],
    tags: ["access", "control", "security"]
  },
  {
    term: "Sandbox",
    zh: "沙箱",
    category: "security",
    summary: "隔離的執行環境，用來限制程式或 agent 造成的影響。",
    analogy: "先讓清潔員在測試房間試清潔劑，避免直接毀掉客廳地板。",
    definition: "An isolated environment that restricts file, network, system, or application access during execution.",
    related: ["Permission", "Code Interpreter", "Guardrails"],
    tags: ["isolation", "execution", "safety"]
  },
  {
    term: "Authentication",
    zh: "身分驗證",
    category: "security",
    summary: "確認使用者、agent 或服務是誰。",
    analogy: "進門前先確認清潔人員證件是不是本人。",
    definition: "The process of verifying the identity of a user, service, or system component.",
    related: ["Authorization", "Permission", "Connector"],
    tags: ["identity", "login", "security"]
  },
  {
    term: "Authorization",
    zh: "授權",
    category: "security",
    summary: "確認已驗證身份能做哪些事、能看哪些資料。",
    analogy: "確認清潔員可以進廚房，但不能進主人書房。",
    definition: "The process of determining what actions or resources an authenticated entity is allowed to access.",
    related: ["Authentication", "Permission", "Audit Log"],
    tags: ["access", "rights", "security"]
  },
  {
    term: "Data Privacy",
    zh: "資料隱私",
    category: "security",
    summary: "保護個人、敏感或機密資料不被不當使用或外洩。",
    analogy: "清潔團隊看到私人文件也不能拍照、外傳或拿去訓練新人。",
    definition: "Practices and controls that protect sensitive data from unauthorized collection, exposure, retention, or use.",
    related: ["Permission", "Audit Log", "Policy"],
    tags: ["privacy", "data", "compliance"]
  },
  {
    term: "Audit Log",
    zh: "稽核紀錄",
    category: "security",
    summary: "記錄誰在何時做了什麼，方便追蹤與問責。",
    analogy: "清潔日誌：誰進過哪個房間、拿過什麼工具、是否請示屋主。",
    definition: "A tamper-aware record of actions, accesses, approvals, and system events for accountability and review.",
    related: ["Trace", "Observability", "Authorization"],
    tags: ["audit", "log", "accountability"]
  },
  {
    term: "Policy",
    zh: "政策",
    category: "security",
    summary: "定義系統允許與禁止行為的規則集合。",
    analogy: "清潔公司的服務規範：不能移動保險箱、不能丟私人物品、危險品要回報。",
    definition: "A set of rules or requirements governing acceptable system behavior, content, access, or operations.",
    related: ["Guardrails", "System Prompt", "Risk Assessment"],
    tags: ["rules", "governance", "compliance"]
  },
  {
    term: "Risk Assessment",
    zh: "風險評估",
    category: "security",
    summary: "判斷某個任務或工具使用可能造成的錯誤、損害或合規問題。",
    analogy: "清潔前先看哪些家具昂貴、哪些藥劑危險、哪些房間需要屋主陪同。",
    definition: "The process of identifying potential harms, likelihood, impact, and controls for AI system behavior.",
    related: ["Human-in-the-loop", "Policy", "Guardrails"],
    tags: ["risk", "safety", "governance"]
  },
  {
    term: "Artificial General Intelligence",
    zh: "通用人工智慧",
    category: "foundation",
    summary: "理想中的 AI 能在廣泛任務上像人一樣學習、遷移與解決問題。",
    analogy: "不是只會打掃的一組工班，而是任何房子、任何問題都能快速學會處理的全能管家。",
    definition: "Artificial General Intelligence refers to a hypothetical AI system with broad, flexible capabilities across domains rather than narrow task-specific competence.",
    related: ["Model", "Large Language Model", "Alignment"],
    tags: ["AGI", "general intelligence", "future"]
  },
  {
    term: "Harness Engineering",
    zh: "裝具工程",
    category: "foundation",
    summary: "把模型包進工具、記憶、流程、權限與安全控制中，讓它能成為可工作的 agent。",
    analogy: "模型像聰明清潔員，harness engineering 則是替他配好工單、工具箱、門禁、回報流程與安全規則。",
    definition: "Harness engineering designs the surrounding system that turns a model into a usable agent, including prompts, tools, memory, state, permissions, workflow logic, and guardrails.",
    related: ["Agent", "Model", "Agentic Workflow", "Orchestration"],
    tags: ["harness", "agent = model + harness", "system design"]
  },
  {
    term: "Pretraining",
    zh: "預訓練",
    category: "foundation",
    summary: "模型在大量資料上先學會語言、知識與基本模式的階段。",
    analogy: "清潔員正式接案前，先讀過大量清潔手冊、案例與常識教材。",
    definition: "Pretraining is the initial large-scale training stage where a model learns general patterns from broad datasets before task-specific adaptation.",
    related: ["Base Model", "Fine-tuning", "Post-training"],
    tags: ["training", "model", "foundation"]
  },
  {
    term: "Fine-tuning",
    zh: "微調",
    category: "foundation",
    summary: "用較特定的資料或任務再訓練模型，使它更符合某個用途。",
    analogy: "已受過訓的清潔員，再針對醫院、實驗室或豪宅清潔接受專門訓練。",
    definition: "Fine-tuning adapts a pretrained model using additional task-specific, domain-specific, or behavior-specific data.",
    related: ["Pretraining", "Instruction Tuning", "Base Model"],
    tags: ["training", "adaptation", "domain"]
  },
  {
    term: "Post-training",
    zh: "後訓練",
    category: "foundation",
    summary: "預訓練後，用來改善模型可用性、指令遵循與安全性的訓練階段。",
    analogy: "員工已學會基本清潔後，公司再訓練服務流程、客戶溝通與安全規範。",
    definition: "Post-training includes techniques after pretraining that shape model behavior, such as instruction tuning, preference optimization, and safety tuning.",
    related: ["Instruction Tuning", "RLHF", "Alignment"],
    tags: ["training", "behavior", "alignment"]
  },
  {
    term: "Instruction Tuning",
    zh: "指令微調",
    category: "foundation",
    summary: "訓練模型更會理解並遵循人類用自然語言寫出的任務指令。",
    analogy: "清潔員不只懂清潔知識，也學會看懂屋主的工作單並照格式回報。",
    definition: "Instruction tuning trains a model on instruction-response examples so it better follows user requests.",
    related: ["Fine-tuning", "System Prompt", "Post-training"],
    tags: ["instruction", "training", "chat"]
  },
  {
    term: "RLHF",
    zh: "人類回饋強化學習",
    category: "foundation",
    summary: "利用人類偏好回饋來調整模型，使輸出更有幫助或更符合期待。",
    analogy: "屋主比較兩種清潔成果並說哪個比較好，清潔公司據此調整訓練。",
    definition: "Reinforcement Learning from Human Feedback uses human preference signals to optimize model behavior.",
    related: ["Post-training", "Alignment", "Evaluation"],
    tags: ["feedback", "preference", "training"]
  },
  {
    term: "Alignment",
    zh: "對齊",
    category: "security",
    summary: "讓 AI 的行為更符合人類意圖、價值、規則與安全邊界。",
    analogy: "確保清潔團隊理解屋主真正想要的是整潔安全，而不是把所有東西都丟掉。",
    definition: "Alignment is the effort to make AI systems behave according to intended goals, human preferences, policies, and safety constraints.",
    related: ["RLHF", "Policy", "Guardrails"],
    tags: ["safety", "values", "control"]
  },
  {
    term: "Base Model",
    zh: "基礎模型",
    category: "foundation",
    summary: "經過預訓練、但尚未完整調成對話或特定任務風格的模型。",
    analogy: "剛完成通識訓練的清潔新人，能力很廣，但還不一定懂公司的服務流程。",
    definition: "A base model is a pretrained model before extensive instruction tuning, preference tuning, or product-specific adaptation.",
    related: ["Pretraining", "Fine-tuning", "Large Language Model"],
    tags: ["model", "pretrained", "foundation"]
  },
  {
    term: "Inference",
    zh: "推論",
    category: "performance",
    summary: "模型被實際呼叫並根據輸入產生輸出或決策的過程。",
    analogy: "清潔員正式進場工作，根據現場狀況開始判斷與執行。",
    definition: "Inference is the runtime process where a trained model produces outputs from inputs.",
    related: ["Latency", "Cost", "Token"],
    tags: ["runtime", "serving", "generation"]
  },
  {
    term: "Agent Loop",
    zh: "智能體循環",
    category: "reasoning",
    summary: "Agent 在觀察、思考、行動、再觀察之間反覆推進任務的循環。",
    analogy: "清潔員看現場、決定下一步、拿工具處理、再檢查是否乾淨。",
    definition: "An agent loop is an iterative control pattern where an agent observes state, reasons or plans, acts, and uses the result to decide the next step.",
    related: ["Observation", "Action", "ReAct"],
    tags: ["loop", "agent", "control"]
  },
  {
    term: "Action",
    zh: "行動",
    category: "reasoning",
    summary: "Agent 根據計畫或判斷採取的具體步驟，常包含工具呼叫。",
    analogy: "不是只說應該吸地，而是真的拿起吸塵器開始吸。",
    definition: "An action is a concrete operation selected by an agent, such as calling a tool, changing state, or producing an output.",
    related: ["Tool Use", "Agent Loop", "Observation"],
    tags: ["act", "tool", "execution"]
  },
  {
    term: "Observation",
    zh: "觀察結果",
    category: "reasoning",
    summary: "工具、環境或前一步行動回傳給 agent 的資訊。",
    analogy: "吸完地後看到灰塵是否還在，或查手冊後得到的處理建議。",
    definition: "An observation is feedback from the environment, tools, or system state that informs an agent's next decision.",
    related: ["Action", "Agent Loop", "Environment"],
    tags: ["feedback", "state", "agent"]
  },
  {
    term: "Environment",
    zh: "環境",
    category: "foundation",
    summary: "Agent 能觀察、互動或改變的外部世界或工作空間。",
    analogy: "清潔團隊所在的房子、房間、工具間與屋主規則，就是它的工作環境。",
    definition: "The environment is the external context an agent can observe and act upon, such as files, browsers, APIs, databases, or user interfaces.",
    related: ["Agent", "Observation", "Sandbox"],
    tags: ["world", "workspace", "interaction"]
  },
  {
    term: "State Machine",
    zh: "狀態機",
    category: "memory",
    summary: "用明確狀態與轉換規則管理流程，避免 agent 隨意跳步。",
    analogy: "清潔流程表規定：待清潔、清潔中、待驗收、已完成，每一步都有條件。",
    definition: "A state machine models a workflow as a finite set of states and allowed transitions between them.",
    related: ["State", "Workflow", "Orchestration"],
    tags: ["state", "workflow", "control"]
  },
  {
    term: "Routing",
    zh: "路由",
    category: "foundation",
    summary: "決定任務、訊息或資料該交給哪個模型、agent、工具或流程。",
    analogy: "領班判斷這件事該交給洗窗專家、水管師傅還是驗收人員。",
    definition: "Routing selects the appropriate component, model, tool, or workflow path based on input, context, or policy.",
    related: ["Orchestration", "Manager Agent", "Workflow"],
    tags: ["routing", "dispatch", "selection"]
  },
  {
    term: "Planner",
    zh: "規劃器",
    category: "reasoning",
    summary: "負責把目標轉成步驟、順序與可執行計畫的元件或 agent。",
    analogy: "清潔領班先排出今天的任務路線與分工表。",
    definition: "A planner is a component that generates, updates, or selects a sequence of steps to achieve a goal.",
    related: ["Planning", "Task Decomposition", "Executor"],
    tags: ["plan", "component", "agent"]
  },
  {
    term: "Executor",
    zh: "執行器",
    category: "reasoning",
    summary: "負責根據計畫實際呼叫工具、執行步驟或產生結果的元件。",
    analogy: "真正拿著工具去擦窗、拖地、清水管的工班。",
    definition: "An executor carries out planned steps by invoking tools, modifying state, or producing task outputs.",
    related: ["Planner", "Tool Use", "Action"],
    tags: ["execution", "agent", "tools"]
  },
  {
    term: "Critic",
    zh: "評審器",
    category: "performance",
    summary: "負責檢查、批判或評分輸出品質的模型、agent 或流程。",
    analogy: "驗收人員檢查角落是否還有灰塵，指出需要重做的地方。",
    definition: "A critic is a review component that evaluates outputs, detects issues, and provides feedback for revision.",
    related: ["Evaluation", "Reflection", "Self-Correction"],
    tags: ["review", "quality", "feedback"]
  },
  {
    term: "Structured Output",
    zh: "結構化輸出",
    category: "foundation",
    summary: "讓模型按固定格式輸出，例如 JSON，方便程式繼續處理。",
    analogy: "清潔員不是口頭亂講，而是填寫固定欄位的完工表。",
    definition: "Structured output constrains model responses to a predictable format such as JSON, schema-conforming objects, or typed fields.",
    related: ["Schema", "Function Calling", "API"],
    tags: ["json", "format", "automation"]
  },
  {
    term: "Schema",
    zh: "結構規格",
    category: "foundation",
    summary: "定義資料、工具參數或輸出格式應有哪些欄位與型別。",
    analogy: "清潔工單的固定表格：房間、任務、工具、狀態、備註都要填對。",
    definition: "A schema specifies the structure, fields, types, and constraints for data exchanged between components.",
    related: ["Structured Output", "Function Calling", "Tool"],
    tags: ["schema", "types", "validation"]
  },
  {
    term: "Retrieval",
    zh: "檢索",
    category: "tools",
    summary: "從文件、資料庫或搜尋系統中找出與問題相關的資訊。",
    analogy: "清潔員先翻手冊、查過去紀錄，找出最相關的處理方法。",
    definition: "Retrieval is the process of finding relevant information from external sources for use by a model or workflow.",
    related: ["RAG", "Vector Database", "Reranking"],
    tags: ["search", "documents", "rag"]
  },
  {
    term: "Reranking",
    zh: "重新排序",
    category: "tools",
    summary: "把初步檢索到的資料重新評分排序，挑出最有用的內容。",
    analogy: "先找到一疊清潔手冊頁面，再把最適合目前污漬的幾頁放到最前面。",
    definition: "Reranking reorders retrieved candidates using a relevance model or scoring method to improve the final context quality.",
    related: ["Retrieval", "RAG", "Embedding"],
    tags: ["ranking", "retrieval", "relevance"]
  },
  {
    term: "Agentic Workflow",
    zh: "智能體工作流",
    category: "foundation",
    summary: "把 agent、工具、記憶、評估與安全控制組成可執行流程的設計。",
    analogy: "完整的大掃除服務流程：接案、分工、查資料、動手、驗收、回報。",
    definition: "An agentic workflow coordinates agents, tools, memory, state, evaluation, and guardrails to complete a goal-directed task.",
    related: ["Workflow", "Agent", "Orchestration"],
    tags: ["agentic", "workflow", "system"]
  },
  {
    term: "Model Distillation",
    zh: "模型蒸餾",
    category: "foundation",
    summary: "用大型模型的能力或輸出訓練較小模型，使其更便宜或更快。",
    analogy: "資深清潔專家把經驗整理成訓練教材，讓新人用較低成本學會關鍵技巧。",
    definition: "Model distillation transfers behavior or knowledge from a larger teacher model to a smaller student model.",
    related: ["Fine-tuning", "Base Model", "Cost"],
    tags: ["training", "compression", "efficiency"]
  }
];
