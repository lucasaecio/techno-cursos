
const fetchData = {
    data() {
      return {
        apiResponse: null,
        loading: true
      }
    },
    methods: {
      fetchData(url) {
        this.loading = true;
        this.apiResponse = null;


        fetch(`http://localhost:3000${url}`)
        .then(r => r.json())
        .then(r => {
            setTimeout(() => {
                this.apiResponse = r;
                this.loading = false;
            }, 500)
        })
      }
    }
  }

  export default fetchData;