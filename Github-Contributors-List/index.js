const getData = async () => {
    const api = "https://api.github.com/repos/C0D1NG/C0D1NG/contributors";
    try {
        let data = await fetch(api);
        realData = await data.json();
        // console.log(realData);
        var html = '<div class="row">';
        for (i = 0; i < realData.length; i++) {
            if (i % 3 == 0 && i != 0) {
                html += '</div>'
                html += '<div class="row">'
            }
            html += `<div class="col-md-4 col-12">`;
            html += `<div class=" card  mt-5 card_red text-center">
                                <div class="title">
                                <img src="${realData[i].avatar_url}" alt="" id="imgbg" >
                                <div class="mt-3">
                                <h4>${realData[i].login}</h4>
                                <p>Total Commit-${realData[i].contributions}</>
                                <a href="${realData[i].html_url}">Github</a>
                                </div>
                            </div></div></div>`
        }

        $('#rowdy').append(html);
    } catch (error) {
        console.log(error);
    }
};


getData();



const getProfieData = async () => {
    const api = "https://api.github.com/repos/C0D1NG/Profile/contributors";
    try {
        let data = await fetch(api);
        realData = await data.json();
        // console.log(realData);
        var html = '<div class="row">';
        for (i = 0; i < realData.length; i++) {
            if (i % 3 == 0 && i != 0) {
                html += '</div>'
                html += '<div class="row">'
            }
            html += `<div class="col-md-4 col-12">`;
            html += `<div class=" card  mt-5 card_red text-center">
                                <div class="title">
                                <img src="${realData[i].avatar_url}" alt="" id="imgbg" >
                                <div class="mt-3">
                                <h4>${realData[i].login}</h4>
                                <p>Total Commit-${realData[i].contributions}</>
                                <a href="${realData[i].html_url}">Github</a>
                                </div>
                            </div></div></div>`
        }

        $('#profile').append(html);
    } catch (error) {
        console.log(error);
    }
};

getProfieData();



const getDevelopment = async () => {
    const api = "https://api.github.com/repos/C0D1NG/Development/contributors";
    try {
        let data = await fetch(api);
        realData = await data.json();
        // console.log(realData);
        var html = '<div class="row">';
        for (i = 0; i < realData.length; i++) {
            if (i % 3 == 0 && i != 0) {
                html += '</div>'
                html += '<div class="row">'
            }
            html += `<div class="col-md-4 col-12">`;
            html += `<div class=" card  mt-5 card_red text-center">
                                <div class="title">
                                <img src="${realData[i].avatar_url}" alt="" id="imgbg" >
                                <div class="mt-3">
                                <h4>${realData[i].login}</h4>
                                <p>Total Commit-${realData[i].contributions}</>
                                <a href="${realData[i].html_url}">Github</a>
                                </div>
                            </div></div></div>`
        }

        $('#Dev').append(html);
    } catch (error) {
        console.log(error);
    }
};

getDevelopment();





const getProgrammingData = async () => {
    const api = "https://api.github.com/repos/C0D1NG/Programming/contributors";
    try {
        let data = await fetch(api);
        realData = await data.json();
        // console.log(realData);
        var html = '<div class="row">';
        for (i = 0; i < realData.length; i++) {
            if (i % 3 == 0 && i != 0) {
                html += '</div>'
                html += '<div class="row">'
            }
            html += `<div class="col-md-4 col-12">`;
            html += `<div class=" card  mt-5 card_red text-center">
                                <div class="title">
                                <img src="${realData[i].avatar_url}" alt="" id="imgbg" >
                                <div class="mt-3">
                                <h4>${realData[i].login}</h4>
                                <p>Total Commit-${realData[i].contributions}</>
                                <a href="${realData[i].html_url}">Github</a>
                                </div>
                            </div></div></div>`
        }

        $('#prog').append(html);
    } catch (error) {
        console.log(error);
    }
};

getProgrammingData();


const getDataStructuresData = async () => {
    const api = "https://api.github.com/repos/C0D1NG/Data-Structures/contributors";
    try {
        let data = await fetch(api);
        realData = await data.json();
        // console.log(realData);
        var html = '<div class="row">';
        for (i = 0; i < realData.length; i++) {
            if (i % 3 == 0 && i != 0) {
                html += '</div>'
                html += '<div class="row">'
            }
            html += `<div class="col-md-4 col-12">`;
            html += `<div class=" card  mt-5 card_red text-center">
                                <div class="title">
                                <img src="${realData[i].avatar_url}" alt="" id="imgbg" >
                                <div class="mt-3">
                                <h4>${realData[i].login}</h4>
                                <p>Total Commit-${realData[i].contributions}</>
                                <a href="${realData[i].html_url}">Github</a>
                                </div>
                            </div></div></div>`
        }

        $('#Datas').append(html);
    } catch (error) {
        console.log(error);
    }
};

getDataStructuresData();


const getAlgorithmsData = async () => {
    const api = "https://api.github.com/repos/C0D1NG/Algorithms/contributors";
    try {
        let data = await fetch(api);
        realData = await data.json();
        // console.log(realData);
        var html = '<div class="row">';
        for (i = 0; i < realData.length; i++) {
            if (i % 3 == 0 && i != 0) {
                html += '</div>'
                html += '<div class="row">'
            }
            html += `<div class="col-md-4 col-12">`;
            html += `<div class=" card  mt-5 card_red text-center">
                                <div class="title">
                                <img src="${realData[i].avatar_url}" alt="" id="imgbg" >
                                <div class="mt-3">
                                <h4>${realData[i].login}</h4>
                                <p>Total Commit-${realData[i].contributions}</>
                                <a href="${realData[i].html_url}">Github</a>
                                </div>
                            </div></div></div>`
        }

        $('#Algorithms').append(html);
    } catch (error) {
        console.log(error);
    }
};

getAlgorithmsData();