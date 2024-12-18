"use strict";(self.webpackChunkdocs_sinpom=self.webpackChunkdocs_sinpom||[]).push([[6861],{1256:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>c});const d=JSON.parse('{"id":"getting-starter/database-structure","title":"Estrutura do Banco de Dados","description":"Vis\xe3o Geral","source":"@site/docs/getting-starter/database-structure.md","sourceDirName":"getting-starter","slug":"/getting-starter/database-structure","permalink":"/docs-sinpom/docs/getting-starter/database-structure","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"docSidebar","previous":{"title":"Arquitetura do Projeto","permalink":"/docs-sinpom/docs/getting-starter/project-structure"},"next":{"title":"Requisitos","permalink":"/docs-sinpom/docs/getting-starter/requirements"}}');var r=n(4848),t=n(8453);const i={sidebar_position:3},a="Estrutura do Banco de Dados",o={},c=[{value:"Vis\xe3o Geral",id:"vis\xe3o-geral",level:2},{value:"Tabelas Principais",id:"tabelas-principais",level:2},{value:"Principais Relacionamentos",id:"principais-relacionamentos",level:2},{value:"Relationamentos de <code>users</code>",id:"relationamentos-de-users",level:3},{value:"Relationamentos de <code>documents</code>",id:"relationamentos-de-documents",level:3},{value:"Exemplo de Consulta SQL",id:"exemplo-de-consulta-sql",level:2},{value:"Diagrama ER",id:"diagrama-er",level:2}];function l(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"estrutura-do-banco-de-dados",children:"Estrutura do Banco de Dados"})}),"\n",(0,r.jsx)(s.h2,{id:"vis\xe3o-geral",children:"Vis\xe3o Geral"}),"\n",(0,r.jsx)(s.p,{children:"O banco de dados do SINPOM \xe9 a espinha dorsal do sistema, permitindo armazenamento e a recupera\xe7\xe3o de dados criticos da plataforma, incluindo contas de usu\xe1rios, fun\xe7\xf5es, logs de acesso e entidades espec\xedficas. Ele usa o MySQL como sgbd, e foi projetado para funcionar perfeitamente com o ORM do Laravel (Eloquent) e \xe9 estruturado para se alinhar \xe0 arquitetura MVC."}),"\n",(0,r.jsx)(s.h2,{id:"tabelas-principais",children:"Tabelas Principais"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"users"})}),": Gerencia detalhes da conta do usu\xe1rio"]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Field Name"}),(0,r.jsx)(s.th,{children:"Data Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"id"}),(0,r.jsx)(s.td,{children:"INT"}),(0,r.jsx)(s.td,{children:"Primary key, auto-increment."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"name"}),(0,r.jsx)(s.td,{children:"VARCHAR(255)"}),(0,r.jsx)(s.td,{children:"User's full name."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"email"}),(0,r.jsx)(s.td,{children:"VARCHAR(255)"}),(0,r.jsx)(s.td,{children:"Unique email address."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"email_verified_at"}),(0,r.jsx)(s.td,{children:"TIMESTAMP"}),(0,r.jsx)(s.td,{children:"Email verification timestamp."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"password"}),(0,r.jsx)(s.td,{children:"VARCHAR(255)"}),(0,r.jsx)(s.td,{children:"Encrypted password."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"remember_token"}),(0,r.jsx)(s.td,{children:"VARCHAR(100)"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"google2fa_secret"}),(0,r.jsx)(s.td,{children:"VARCHAR(255)"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"created_at"}),(0,r.jsx)(s.td,{children:"TIMESTAMP"}),(0,r.jsx)(s.td,{children:"Record creation timestamp."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"updated_at"}),(0,r.jsx)(s.td,{children:"TIMESTAMP"}),(0,r.jsx)(s.td,{children:"Record last update timestamp."})]})]})]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"documents"})}),": Tabela de documentos."]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Field Name"}),(0,r.jsx)(s.th,{children:"Data Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"id"}),(0,r.jsx)(s.td,{children:"BIGINT unsigned"}),(0,r.jsx)(s.td,{children:"Primary key, auto-increment"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"document_kind_id"}),(0,r.jsx)(s.td,{children:"BIGINT unsigned"}),(0,r.jsx)(s.td,{children:"tipo do documento"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"staff_id"}),(0,r.jsx)(s.td,{children:"BIGINT unsigned"}),(0,r.jsx)(s.td,{children:"matricula do criador"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"rank_id"}),(0,r.jsx)(s.td,{children:"BIGINT unsigned"}),(0,r.jsx)(s.td,{children:"posto/graduacao do criador"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"opm_structure_id"}),(0,r.jsx)(s.td,{children:"BIGINT unsigned"}),(0,r.jsx)(s.td,{children:"se\xe7\xe3o do criador do documento"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"assinado_por"}),(0,r.jsx)(s.td,{children:"BIGINT unsigned"}),(0,r.jsx)(s.td,{children:"assinatura do documento finalizado"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"assinado_por_rank"}),(0,r.jsx)(s.td,{children:"BIGINT unsigned"}),(0,r.jsx)(s.td,{children:"assinatura do documento finalizado"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"reference_document_id"}),(0,r.jsx)(s.td,{children:"BIGINT unsigned"}),(0,r.jsx)(s.td,{children:"documento que deu origem a este"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"reply_document_id"}),(0,r.jsx)(s.td,{children:"BIGINT unsigned"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"util_ate"}),(0,r.jsx)(s.td,{children:"DATE"}),(0,r.jsx)(s.td,{children:"prazo aceit\xe1vel do documento"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"conteudo"}),(0,r.jsx)(s.td,{children:"TEXT"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"difundido"}),(0,r.jsx)(s.td,{children:"TINYINT(1)"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"bloqueio_sap"}),(0,r.jsx)(s.td,{children:"TINYINT(1)"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"assunto"}),(0,r.jsx)(s.td,{children:"VARCHAR(191)"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"referencias"}),(0,r.jsx)(s.td,{children:"VARCHAR(191)"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"created_at"}),(0,r.jsx)(s.td,{children:"TIMESTAMP"}),(0,r.jsx)(s.td,{children:"Record creation timestamp."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"updated_at"}),(0,r.jsx)(s.td,{children:"TIMESTAMP"}),(0,r.jsx)(s.td,{children:"Record last update timestamp."})]})]})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"principais-relacionamentos",children:"Principais Relacionamentos"}),"\n",(0,r.jsxs)(s.h3,{id:"relationamentos-de-users",children:["Relationamentos de ",(0,r.jsx)(s.code,{children:"users"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Diagrama relacionamento Users",src:n(4240).A+"",width:"952",height:"1089"})}),"\n",(0,r.jsxs)(s.h3,{id:"relationamentos-de-documents",children:["Relationamentos de ",(0,r.jsx)(s.code,{children:"documents"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Diagrama relacionamento Documents",src:n(5770).A+"",width:"879",height:"1024"})}),"\n",(0,r.jsx)(s.h2,{id:"exemplo-de-consulta-sql",children:"Exemplo de Consulta SQL"}),"\n",(0,r.jsx)(s.p,{children:"Lista todos os agentes de uma OPM ou de um CPR"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"   $user = Auth::user();\n      $opm = Opm::find($request->opm_id);\n      $isCpr = $opm ? $opm->grande_comando : null;\n      $agentsQuery = User::join('staff', 'users.staff_id','=','staff.id')\n         ->leftJoin('agent_request_for_inclusions', 'agent_request_for_inclusions.staff_id', '=', 'staff.id')\n         ->join('opms','opms.id', '=', 'staff.opm_id')\n         ->join('model_has_roles','users.id','=','model_has_roles.model_id')\n         ->join('ranks','staff.rank_id','=','ranks.id')\n         ->join('roles', 'roles.id', '=', 'model_has_roles.role_id')\n         ->whereNotIn('roles.name', ['Comandante - OPM', 'Subcomandante - OPM', 'Comandante - CPR', 'Subcomandante - CPR'])\n         ->when(($request->opm_id == $user->staff->opm_id) and ($isCpr), function($q) use ($request){\n            $q->where('opms.cpr_id', $request->opm_id);\n         })\n         ->when($request->opm_id, function($q) use ($request){\n            $q->where('staff.opm_id',$request->opm_id);\n         })\n         ->when(!$request->opm_id and $user->hasAnyPermission(['Consultar agentes OPM']), function($q) use ($user){\n            $q->where('staff.opm_id',$user->staff->opm_id);\n         })\n         ->when(($request->staff_id) and $user->hasAnyPermission(['Consultar agentes OPM']), function($q) use ($request, $user){\n            $q->where('staff.opm_id',$user->staff->opm_id)\n            ->where('users.id', Crypt::decrypt($request->staff_id));\n         })\n         ->when(!$request->opm_id and $user->hasAnyPermission(['Consultar agentes CPR']), function($q) use ($user){\n            $q->where('opms.cpr_id', $user->staff->opm->cpr_id);\n         })\n         ->when(($request->staff_id) and $user->hasAnyPermission(['Consultar agentes CPR']), function($q) use ($request, $user){\n            $q->where('opms.cpr_id', $user->staff->opm->cpr_id)\n            ->where('users.id', Crypt::decrypt($request->staff_id));\n         })\n         ->when(($request->staff_id) and $user->hasAnyPermission(['Ver todos agentes']), function($q) use ($request, $user){\n            $q->where('users.id', Crypt::decrypt($request->staff_id));\n         })->groupBy('staff.id');\n      $agentsCountByRank = $agentsQuery->select('users.*')->orderBy('ranks.nivel')->get()->countBy('staff.rank.rank');\n      $agents = $agentsQuery->select('users.*')->orderBy('ranks.nivel')->orderBy('staff.id')->paginate(50);\n"})}),"\n",(0,r.jsx)(s.h2,{id:"diagrama-er",children:"Diagrama ER"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Diagrama ER",src:n(1632).A+"",width:"2833",height:"14650"})})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},5770:(e,s,n)=>{n.d(s,{A:()=>d});const d=n.p+"assets/images/documents_relationship-7540f4a724ed6efb46c5393614f3836a.png"},1632:(e,s,n)=>{n.d(s,{A:()=>d});const d=n.p+"assets/images/er-diagram-fca9e48359b73eb86cebd64da4cbf718.png"},4240:(e,s,n)=>{n.d(s,{A:()=>d});const d=n.p+"assets/images/users_relationship-e07b13721aebc46cfcc4bd370b4cd089.png"},8453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>a});var d=n(6540);const r={},t=d.createContext(r);function i(e){const s=d.useContext(t);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),d.createElement(t.Provider,{value:s},e.children)}}}]);