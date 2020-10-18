const projectBgColor = '#7bb2b6';

export const routes = [
    {
        path: "/",
        exact: true,
        sidebar: true,
        color: '#26294e',
    },
    {
        path: '/myskills',
        exact: true,
        sidebar: true,
        color: '#83d7e2',
    },
    {
        path: "/projects",
        exact: true,
        sidebar: true,
        color: projectBgColor,
    },
    {
        path: "/htmlcss",
        exact: true,
        sidebar: true,
        color: projectBgColor,
    },
    {
        path: "/javascript",
        exact: true,
        sidebar: true,
        color: projectBgColor,
    },
    {
        path: "/react",
        exact: true,
        sidebar: true,
        color: projectBgColor,
    },
    {
        path: "/contact",
        exact: true,
        sidebar: true,
        color: '#d1d3eb',
    },
    {
        path: "/404",
        exact: false,
        sidebar: false,
    },
]
