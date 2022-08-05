module.exports = {
    exportTrailingSlash: true,
    images: {
        loader: 'akamai',
        path: '/',
      },
    exportPathMap: function(){
       return {
          '/': {page: '/'}
       };

    }
  };
  