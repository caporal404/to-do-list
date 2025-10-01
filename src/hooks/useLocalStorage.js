
export default function useLocalStorage (key, initialValue = null) {
    // Récuperation des données du localStorage
    const getSaved = () => {
        const data = localStorage.getItem(key);
        
        if (!data) {
            localStorage.setItem(key, JSON.stringify(initialValue));
            console.log(`${key} successfully created !`)
        } else console.log(`${key} successfully retrieved !`);
        
        return data ? JSON.parse(data) : initialValue;
    }
    
    // Enregistrement des données dans le localStorage
    const save = data => {
        localStorage.setItem(key, JSON.stringify(data));
        console.log(`${key} successfully saved !`);
    }
    
    return {
        savedData: getSaved(), 
        save, 
        getSaved 
    }
}