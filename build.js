{
    appDir: 'front', // directory with the html, css and js files
    mainConfigFile: 'front/config.js',
    dir: 'build',
    modules: [
        // First set up the common build layer.
        // {
        //     //module names are relative to baseUrl
        //     name: 'common',
        //     //List common dependencies here. Only need to list
        //     //top level dependencies, "include" will find
        //     //nested dependencies.
        //     include: [
        //       'jquery'
        //     ]
        // },

        //Now set up a build layer for each page, but exclude
        //the common one. "exclude" will exclude
        //the nested, built dependencies from "common". Any
        //"exclude" that includes built modules should be
        //listed before the build layer that wants to exclude it.
        //"include" the appropriate "app/main*" module since by default
        //it will not get added to the build since it is loaded by a nested
        //requirejs in the page*.js files.
        {
            //module names are relative to baseUrl/paths config
            name: 'pages/home/home',
            include: ['pages/home/home.treatment']
        },

        {
            //module names are relative to baseUrl
            name: 'pages/about/about',
            include: ['pages/about/about.section'],
            // exclude: ['common'] no need to exclude common files in this page
        }

    ]
}
