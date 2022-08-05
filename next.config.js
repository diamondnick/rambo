module.exports = {
    exportTrailingSlash: true,
    experimental: {
        images: {
            unoptimized: true
        }
    },
    exportPathMap: function(){
       return {
          '/': {page: '/'}
       };

    }
  };
  