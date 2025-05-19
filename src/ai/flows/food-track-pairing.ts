'use server';
/**
 * @fileOverview An AI agent that suggests a Davido song based on a food choice.
 *
 * - suggestTrack - A function that handles the song suggestion process.
 * - FoodTrackPairingInput - The input type for the suggestTrack function.
 * - FoodTrackPairingOutput - The return type for the suggestTrack function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FoodTrackPairingInputSchema = z.object({
  foodItem: z
    .string()
    .describe('The name of the food item selected by the user.'),
});
export type FoodTrackPairingInput = z.infer<typeof FoodTrackPairingInputSchema>;

const FoodTrackPairingOutputSchema = z.object({
  songTitle: z.string().describe('The suggested song title from Davido\'s album.'),
  reason: z.string().describe('The reason why this song was suggested for the food item.'),
});
export type FoodTrackPairingOutput = z.infer<typeof FoodTrackPairingOutputSchema>;

export async function suggestTrack(input: FoodTrackPairingInput): Promise<FoodTrackPairingOutput> {
  return suggestTrackFlow(input);
}

const prompt = ai.definePrompt({
  name: 'foodTrackPairingPrompt',
  input: {schema: FoodTrackPairingInputSchema},
  output: {schema: FoodTrackPairingOutputSchema},
  prompt: `You are an expert music curator with a deep knowledge of Davido\'s discography. A user has selected a food item, and you will suggest a song from Davido\'s album that complements the food\'s vibe.

Food Item: {{{foodItem}}}

Consider the flavor profile, cultural origin, and overall sensory experience associated with the food. Explain your reasoning for choosing the selected song.

Ensure that the output accurately reflects a song title from Davido's album, and that the reason is concise and relevant.
`,
});

const suggestTrackFlow = ai.defineFlow(
  {
    name: 'suggestTrackFlow',
    inputSchema: FoodTrackPairingInputSchema,
    outputSchema: FoodTrackPairingOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
