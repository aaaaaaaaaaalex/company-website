'use server';

export type State = {
    errors?: {
        name?: string,
        email?: string,
        message?: string,
    }
    message?: string | null;
};

export async function contactAction(prevState: State, formData: FormData) {
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    const errors: State["errors"] = {};
    
    if (!name) errors.name = 'fill name';
    if (!email) errors.email = 'fill email';
    if (!message) errors.message = 'fill message'
    if (Object.keys(errors).length > 0) {
        return { errors }
    }

    console.log(`Thank you for your interest, ${name}`);
    
    return { message: `Thank you for your interest, ${name}`}
}