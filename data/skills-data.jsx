import {
  FaAws,
  FaCss3Alt,
  FaHtml5,
  FaLaravel,
  FaNodeJs,
  FaPhp,
  FaReact,
  FaVuejs,
} from "react-icons/fa";
import {
  SiC,
  SiDart,
  SiFirebase,
  SiFlutter,
  SiGooglecloud,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNetlify,
  SiNextdotjs,
  SiPostgresql,
  SiSupabase,
  SiVercel,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

const skillsData = [
  // Frameworks
  { name: "React.js", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <FaNodeJs /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Nest.js", icon: <SiNestjs /> },
  { name: "Vue.js", icon: <FaVuejs /> },
  { name: "Laravel", icon: <FaLaravel /> },
  { name: "Flutter", icon: <SiFlutter /> },

  // Languages
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "PHP", icon: <FaPhp /> },
  { name: "Dart", icon: <SiDart /> },
  { name: "C", icon: <SiC /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "HTML", icon: <FaHtml5 /> },

  // Databases
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Supabase", icon: <SiSupabase /> },

  // Deployment
  { name: "AWS", icon: <FaAws /> },
  { name: "Vercel", icon: <SiVercel /> },
  { name: "Netlify", icon: <SiNetlify /> },
  { name: "GCP", icon: <SiGooglecloud /> },
  { name: "Azure", icon: <VscAzure /> },
];

export default skillsData;
