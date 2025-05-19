'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { suggestTrack, FoodTrackPairingInput, FoodTrackPairingOutput } from '@/ai/flows/food-track-pairing';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Music, Zap } from 'lucide-react';

const foodItems = [
  "Jollof Rice",
  "Suya (Spicy Grilled Skewers)",
  "Pounded Yam with Egusi Soup",
  "Fried Plantains (Dodo)",
  "Nigerian Chapman Cocktail",
  "Efo Riro (Spinach Stew)",
  "Pepper Soup (Spicy Broth)",
  "Moi Moi (Steamed Bean Pudding)",
  "Akara (Bean Fritters)",
  "Puff Puff (Sweet Fried Dough)"
];

const formSchema = z.object({
  foodItem: z.string().min(1, "Please select a food item."),
});

type FormData = z.infer<typeof formSchema>;

export function AiPairingForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [pairingResult, setPairingResult] = useState<FoodTrackPairingOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      foodItem: '',
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setPairingResult(null);
    try {
      const result = await suggestTrack(data as FoodTrackPairingInput);
      setPairingResult(result);
      toast({
        title: "Vibe Paired!",
        description: `We found the perfect track for ${data.foodItem}.`,
        variant: "default",
      });
    } catch (error) {
      console.error("AI Pairing Error:", error);
      toast({
        title: "Error Pairing Vibe",
        description: "Could not generate a song pairing. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-lg mx-auto shadow-2xl border-accent/30">
      <CardHeader className="text-center">
        <Zap className="mx-auto h-12 w-12 text-primary mb-2" />
        <CardTitle className="text-3xl font-bold text-glow-gold">Find Your Food's Soundtrack</CardTitle>
        <CardDescription className="text-muted-foreground">
          Select a dish from 5iVE Kitchen and let our AI find the perfect Davido track to match its vibe.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="foodItem"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Choose Your Dish</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="h-12 text-base">
                        <SelectValue placeholder="Select a food item..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {foodItems.map((item) => (
                        <SelectItem key={item} value={item} className="text-base">
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full h-12 text-lg bg-primary hover:bg-primary/90 text-primary-foreground">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Pairing Vibe...
                </>
              ) : (
                <>
                  <Music className="mr-2 h-5 w-5" />
                  Get Song Pairing
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
      {pairingResult && (
        <CardFooter className="flex flex-col items-start space-y-4 pt-6 border-t mt-6">
          <h3 className="text-2xl font-semibold text-primary">Vibe Pairing:</h3>
          <div className="p-4 bg-muted/50 rounded-md w-full shadow-inner">
            <p className="text-xl font-medium">
              <Music className="inline-block mr-2 h-5 w-5 text-accent" />
              Song: <span className="text-accent-foreground font-bold">{pairingResult.songTitle}</span>
            </p>
            <p className="mt-2 text-muted-foreground italic">"{pairingResult.reason}"</p>
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
