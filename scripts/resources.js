// function to fetch learning resources from the JSON file hosted on GitHub
const getResources = async() => {

    let resourcesData = await fetch('https://raw.githubusercontent.com/Parthiv-M/e-cell-mit/master/scripts/data/resources.json');;
    const parsedResourcesData = await resourcesData.json();
    
    let podcasts = parsedResourcesData[0].podcasts;
    let videos = parsedResourcesData[1].videos;
    let newsletter = parsedResourcesData[2].newsletter;
    let blogs = parsedResourcesData[3].blogs;
    let webseries = parsedResourcesData[4].webseries;
    let events = parsedResourcesData[5].events;
    
    let allResources = [podcasts, videos, newsletter, blogs, webseries, events];
    
    for(let dummy_incrementor = 0; dummy_incrementor < allResources.length; dummy_incrementor++){
        let innerHTML_container = "";
        const dataTemplate = `
        <div class="col-md-6 col-12">
          <a href="${allResources[dummy_incrementor][0].link}" target="_blank" class="h-100 w-100">
              <div class="p-3 primary-tile"> 
                  <div class="container-fluid d-flex flex-column h-100 justify-content-end align-items-start">
                      <a href="${allResources[dummy_incrementor][0].link}" target="_blank">
                        <h2 class="mb-1">${allResources[dummy_incrementor][0].name}</h2>
                      </a>
                      ${ allResources[dummy_incrementor][0].tag ? `<p class="my-2 border p-2 text-white" style="border-radius: 1rem">
                            ${allResources[dummy_incrementor][0].tag}
                        </p>` : ""}
                      <p>${allResources[dummy_incrementor][0].short}</p>
                  </div>
              </div>
          </a>
        </div>
        <div class="col-md-6 col-12"> 
            <div class="col-12">
                <a href="${allResources[dummy_incrementor][1].link}" target="_blank" class="h-100 w-100">
                    <div class="p-3 secondary-tile">
                        <div class="container-fluid d-flex flex-column h-100 justify-content-start align-items-start">
                            <a href="${allResources[dummy_incrementor][1].link}" target="_blank">
                                <h2 class="mb-1">
                                    ${allResources[dummy_incrementor][1].name}
                                </h2>
                            </a>
                            ${ allResources[dummy_incrementor][1].tag ? `<p class="my-2 border p-2 text-white" style="border-radius: 1rem">
                                ${allResources[dummy_incrementor][1].tag}
                            </p>` : ""} 
                            <p>
                                ${allResources[dummy_incrementor][1].short} 
                            </p>
                        </div>
                    </div>
                </a>
            </div>
            <div class="mt-1 row row-cols-2 g-1">
                ${ 
                    allResources[dummy_incrementor][2] 
                    ? `
                    <div class="col-md-6 col-12">
                        <a href="${allResources[dummy_incrementor][2].link}" target="_blank" class="h-100 w-100">
                            <div class="p-3 border bg-light side-tile">
                                <div class="container-fluid d-flex flex-column h-100 justify-content-start align-items-start">
                                    <a href="${allResources[dummy_incrementor][2].link}" target="_blank">
                                        <h2 class="mb-1">
                                            ${allResources[dummy_incrementor][2].name}
                                        </h2>
                                    </a>
                                    ${ allResources[dummy_incrementor][2].tag ? `<p class="my-2 border border-dark p-1 text-muted" style="border-radius: 1rem; font-size: 1rem">
                                        ${allResources[dummy_incrementor][2].tag}
                                    </p>` : "" }
                                    <p class="text-muted">
                                        ${allResources[dummy_incrementor][2].short} 
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>` 
                    : 
                    "" 
                }
                ${ 
                    allResources[dummy_incrementor][3] 
                    ? `
                    <div class="col-md-6 col-12">
                        <a href="${allResources[dummy_incrementor][3].link}" target="_blank" class="h-100 w-100">
                            <div class="p-3 border bg-light side-tile">
                                <div class="container-fluid d-flex flex-column h-100 justify-content-start align-items-start">
                                    <a href="${allResources[dummy_incrementor][3].link}" target="_blank">
                                        <h2 class="mb-1">
                                            ${allResources[dummy_incrementor][3].name}
                                        </h2>
                                    </a>
                                    ${ allResources[dummy_incrementor][3].tag ? `<p class="my-2 border border-dark p-1 text-muted" style="border-radius: 1rem; font-size: 1rem">
                                        ${allResources[dummy_incrementor][3].tag}
                                    </p>` : "" }
                                    <p class="text-muted" style="font-size: 1rem">
                                        ${allResources[dummy_incrementor][3].short} 
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>` 
                    : 
                    "" 
                }
                ${ 
                    allResources[dummy_incrementor][4] 
                    ? `
                    <div class="col-md-6 col-12">
                        <a href="${allResources[dummy_incrementor][4].link}" target="_blank" class="h-100 w-100">
                            <div class="p-3 border bg-light side-tile">
                                <div class="container-fluid d-flex flex-column h-100 justify-content-start align-items-start">
                                    <a href="${allResources[dummy_incrementor][4].link}" target="_blank">
                                        <h2 class="mb-1">
                                            ${allResources[dummy_incrementor][4].name}
                                        </h2>
                                    </a>
                                    ${ allResources[dummy_incrementor][4].tag ? `<p class="my-2 border border-dark p-1 text-muted" style="border-radius: 1rem; font-size: 1rem">
                                        ${allResources[dummy_incrementor][4].tag}
                                    </p>` : "" }
                                    <p class="text-muted">
                                        ${allResources[dummy_incrementor][4].short} 
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>` 
                    : 
                    "" 
                }
                ${ 
                    allResources[dummy_incrementor][5] 
                    ? `
                    <div class="col-md-6 col-12">
                        <a href="${allResources[dummy_incrementor][5].link}" target="_blank" class="h-100 w-100">
                            <div class="p-3 border bg-light side-tile">
                                <div class="container-fluid d-flex flex-column h-100 justify-content-start align-items-start">
                                    <a href="${allResources[dummy_incrementor][5].link}" target="_blank">
                                        <h2 class="mb-1">
                                            ${allResources[dummy_incrementor][5].name}
                                        </h2>
                                    </a>
                                    ${ allResources[dummy_incrementor][5].tag ? `<p class="my-2 border border-dark p-1 text-muted" style="border-radius: 1rem; font-size: 1rem">
                                        ${allResources[dummy_incrementor][5].tag}
                                    </p>` : "" }
                                    <p class="text-muted">
                                        ${allResources[dummy_incrementor][5].short}
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>` 
                    : 
                    "" 
                }
            </div>
          </div>
        `;
        innerHTML_container += dataTemplate;
        document.getElementById(`${Object.keys(parsedResourcesData[dummy_incrementor])[0]}-data`).innerHTML = innerHTML_container;
        innerHTML_container = "";
    }
}

getResources();