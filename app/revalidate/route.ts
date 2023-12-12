import { revalidatePath } from 'next/cache';

export const GET = async (req: Request) => {
  revalidatePath('/');
  revalidatePath('/lebenslauf');
  revalidatePath('/projekte');
  revalidatePath('/kontakt');

  return Response.json({ success: true });
};
