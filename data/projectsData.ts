interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
  backgroundImage?: string
}

const projectsData: Project[] = [
  {
    title: 'algo-journal',
    description: `算法学习笔记，方便以后查阅`,
    // imgSrc: '/static/images/google.png',
    backgroundImage: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
    href: 'https://github.com/zxuxuuu/algo-journal',
  },
]

export default projectsData
