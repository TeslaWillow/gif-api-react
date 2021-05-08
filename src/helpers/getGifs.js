export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=RLMG4Xp65Ljo4aFBYRbIhEFvtBD7jbaN`; 
    const res = await fetch(url);
    const { data } = await res.json();

    const gifs = data.map(img => { 
        return{ 
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

   return gifs;
};