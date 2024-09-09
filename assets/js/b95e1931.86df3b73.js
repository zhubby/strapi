"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3224],{4210:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var t=i(4848),s=i(8453);const o={title:"Build",tags:["commands","admin","build"]},a=void 0,d={id:"docs/core/admin/commands/build",title:"Build",description:"How it works",source:"@site/docs/docs/01-core/admin/04-commands/01-build.md",sourceDirName:"docs/01-core/admin/04-commands",slug:"/docs/core/admin/commands/build",permalink:"/docs/core/admin/commands/build",draft:!1,unlisted:!1,editUrl:"https://github.com/strapi/strapi/tree/main/docs/docs/docs/01-core/admin/04-commands/01-build.md",tags:[{label:"commands",permalink:"/tags/commands"},{label:"admin",permalink:"/tags/admin"},{label:"build",permalink:"/tags/build"}],version:"current",sidebarPosition:1,frontMatter:{title:"Build",tags:["commands","admin","build"]},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/core/admin/commands/overview"},next:{title:"Develop",permalink:"/docs/core/admin/commands/develop"}},r={},l=[{value:"How it works",id:"how-it-works",level:2},{value:"Dependencies",id:"dependencies",level:3},{value:"BuildContext",id:"buildcontext",level:3},{value:"Static Files",id:"static-files",level:3},{value:"Bundling",id:"bundling",level:3},{value:"CLI Usage",id:"cli-usage",level:2},{value:"Options",id:"options",level:3},{value:"Node Usage",id:"node-usage",level:2},{value:"Options",id:"options-1",level:3}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,t.jsxs)(n.p,{children:["The build process for the admin panel is designed to be bundler agnostic, this means we can easily experiment and perhaps transition to new bundlers as they become available in the ecosystem. This is facilitated by the use of a ",(0,t.jsx)(n.a,{href:"#buildcontext",children:(0,t.jsx)(n.code,{children:"BuildContext"})})," that contains all the information needed to build the admin panel \u2013 if it's found more information is required this context can be tweaked to provide it."]}),"\n",(0,t.jsx)(n.h3,{id:"dependencies",children:"Dependencies"}),"\n",(0,t.jsx)(n.p,{children:"The first step of running the build command is to check if the required dependencies are installed at the root of the project. This provides better DX for:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"miss-installed project"}),"\n",(0,t.jsx)(n.li,{children:"monorepos"}),"\n",(0,t.jsxs)(n.li,{children:["incorrect/incompatible versions of packages for ",(0,t.jsx)(n.em,{children:"certain"})," packages like ",(0,t.jsx)(n.code,{children:"styled-components"})," or ",(0,t.jsx)(n.code,{children:"react"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The list of packages we explicity check for are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"react"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"react-dom"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"styled-components"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"react-router-dom"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["This is because there should only be one instance of these packages installed and used by the project at any one time, failure to do so can and most likely will, lead to bugs. This also means an incompatible version of these packages could cause unintended side effects e.g. if ",(0,t.jsx)(n.code,{children:"react@19"})," was suddenly released but we had not tested it against the admin panel."]}),"\n",(0,t.jsx)(n.p,{children:"We run a prompt to encourage the user to install these deps \u2013 however, this functionality has not yet been built."}),"\n",(0,t.jsx)(n.h3,{id:"buildcontext",children:"BuildContext"}),"\n",(0,t.jsx)(n.p,{children:"The build context is the heart of how the admin builds, as said above it's agnostic, it doesn't care if we're using webpack or vite or parcel. It's an object of data that can be used to preapre any bundler. It's shape looks like:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface BuildContext {\n  /**\n   * The absolute path to the app directory defined by the Strapi instance\n   */\n  appDir: string;\n  /**\n   * If a user is deploying the project under a nested public path, we use\n   * this path so all asset paths will be rewritten accordingly\n   */\n  basePath: string;\n  /**\n   * The customisations defined by the user in their app.js file\n   */\n  customisations?: AppFile;\n  /**\n   * The current working directory\n   */\n  cwd: string;\n  /**\n   * The absolute path to the dist directory\n   */\n  distPath: string;\n  /**\n   * The relative path to the dist directory\n   */\n  distDir: string;\n  /**\n   * The absolute path to the entry file\n   */\n  entry: string;\n  /**\n   * The environment variables to be included in the JS bundle\n   */\n  env: Record<string, string>;\n  logger: CLIContext['logger'];\n  /**\n   * The build options\n   */\n  options: Pick<BuildOptions, 'minify' | 'sourcemaps' | 'stats'> & Pick<DevelopOptions, 'open'>;\n  /**\n   * The plugins to be included in the JS bundle\n   * incl. internal plugins, third party plugins & local plugins\n   */\n  plugins: Array<{\n    path: string;\n    name: string;\n    importName: string;\n  }>;\n  /**\n   * The absolute path to the runtime directory\n   */\n  runtimeDir: string;\n  /**\n   * The Strapi instance\n   */\n  strapi: Strapi;\n  /**\n   * The browserslist target either loaded from the user's workspace or falling back to the default\n   */\n  target: string[];\n  tsconfig?: CLIContext['tsconfig'];\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"static-files",children:"Static Files"}),"\n",(0,t.jsxs)(n.p,{children:["The next step is to create a ",(0,t.jsx)(n.code,{children:"runtime"})," folder in the root of the strapi project, a generic name ",(0,t.jsx)(n.code,{children:".strapi"})," is used and the build specifically uses a subfolder called ",(0,t.jsx)(n.code,{children:"client"}),". This leaves more space for us to expand as and when we require it. We only generate two files for this \u2013 an ",(0,t.jsx)(n.code,{children:"index.html"})," which is a static rendered React Component from the ",(0,t.jsx)(n.code,{children:"@strapi/admin"})," package (DefaultDocument) & an ",(0,t.jsx)(n.code,{children:"entry.js"})," file which calls the ",(0,t.jsx)(n.code,{children:"renderAdmin"})," function & provides a mount point & plugin object."]}),"\n",(0,t.jsx)(n.h3,{id:"bundling",children:"Bundling"}),"\n",(0,t.jsxs)(n.p,{children:["We currently only support the ",(0,t.jsx)(n.code,{children:"webpack"})," bundler. Because there is no global ",(0,t.jsx)(n.code,{children:"strapi.config"})," file we don't have an already existing API to pass your own bundler. In the future we may decide to do this if there is a need. The current future plan is to add the ",(0,t.jsx)(n.code,{children:"vite"})," bundler as an option. Each bundler supplies a build function & a develop function. We don't need a serve function because they're expected to produce the same ",(0,t.jsx)(n.code,{children:"index.html"})," output defined by the static files step described above."]}),"\n",(0,t.jsx)(n.h2,{id:"cli-usage",children:"CLI Usage"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"strapi build\n"})}),"\n",(0,t.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"Build the strapi admin app\n\nOptions:\n  -d, --debug        Enable debugging mode with verbose logs (default: false)\n  --minify           Minify the output (default: true)\n  --no-optimization  [deprecated]: use minify instead\n  --silent           Don't log anything (default: false)\n  --sourcemap        Produce sourcemaps (default: false)\n  --stats            Print build statistics to the console (default: false)\n  -h, --help         Display help for command\n"})}),"\n",(0,t.jsx)(n.h2,{id:"node-usage",children:"Node Usage"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { build, BuildOptions } from '@strapi/admin/_internal';\n\nconst args: BuildOptions = {\n  // ...\n};\n\nawait build(args);\n"})}),"\n",(0,t.jsx)(n.h3,{id:"options-1",children:"Options"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface BuildOptions extends CLIContext {\n  /**\n   * The directory to build the command was ran from\n   */\n  cwd: string;\n  /**\n   * The logger to use.\n   */\n  logger: Logger;\n  /**\n   * Minify the output\n   *\n   * @default true\n   */\n  minify?: boolean;\n  /**\n   * Generate sourcemaps \u2013 useful for debugging bugs in the admin panel UI.\n   */\n  sourcemaps?: boolean;\n  /**\n   * Print stats for build\n   */\n  stats?: boolean;\n  /**\n   * The tsconfig to use for the build. If undefined, this is not a TS project.\n   */\n  tsconfig?: TsConfig;\n}\n\ninterface Logger {\n  warnings: number;\n  errors: number;\n  debug: (...args: unknown[]) => void;\n  info: (...args: unknown[]) => void;\n  warn: (...args: unknown[]) => void;\n  error: (...args: unknown[]) => void;\n  log: (...args: unknown[]) => void;\n  spinner: (text: string) => Pick<ora.Ora, 'succeed' | 'fail' | 'start' | 'text'>;\n}\n\ninterface TsConfig {\n  config: ts.ParsedCommandLine;\n  path: string;\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>d});var t=i(6540);const s={},o=t.createContext(s);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);