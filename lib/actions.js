'use server';

export async function shareMeal(formdata) {

    const meal = {
        title: formdata.get('title'),
        summary: formdata.get('summary'),
        instructions: formdata.get('instructions'),
        image: formdata.get('image'),
        creator: formdata.get('name'),
        creator_email: formdata.get('email'),
    }
    console.log(meal);
        
}