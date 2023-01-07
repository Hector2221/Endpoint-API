const apiCall = async () => {
    try {
        const res = await fetch('https://rickandmortyapi.com/api/character/231');
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

apiCall();