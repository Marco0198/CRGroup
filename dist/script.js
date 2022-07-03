new Vue({
  el: '#app',
  data: {
    currentFilter: 'Winter School 2022',
    projects: [] },

   async mounted() {
      const response = await fetch('https://arthurfrost.qflo.co.za/php/getTimeline.php/?limit=10');
     
      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }
      const movies = await response.json();
      this.projects=movies.Timeline;
     // setData(movies.Timeline)
      console.log(movies.Timeline)
      return movies;
    }
  ,
  methods: {
    setFilter: function (filter) {
      this.currentFilter = filter;
    }
    // async fetchMoviesBadStatus() {
    //   const response = await fetch('https://arthurfrost.qflo.co.za/php/getTimeline.php/?limit=10');
     
    //   if (!response.ok) {
    //     const message = `An error has occured: ${response.status}`;
    //     throw new Error(message);
    //   }
    //   const movies = await response.json();
    //   this.projects=movies.Timeline;
    //  // setData(movies.Timeline)
    //   console.log(movies.Timeline)
    //   return movies;
    // }
    
  
  }});