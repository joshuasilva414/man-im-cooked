from manim_voiceover import VoiceoverScene
from manim_voiceover.services.gtts import GTTSService

class AdditionScene(VoiceoverScene):
    def construct(self):
        self.set_speech_service(GTTSService())
        
        title = Text("Understanding Addition", font_size=32)
        title.to_edge(UP)
        self.play(Write(title))
        
        with self.voiceover(text="Let's dive into the concept of addition.") as tracker:
            self.play(FadeIn(title))

        explanation1 = Text("Addition is combining numbers to find their total.", font_size=24)
        explanation1.next_to(title, DOWN)
        self.play(Write(explanation1))
        
        with self.voiceover(text="When you add numbers, you are putting them together.") as tracker:
            self.wait(2)

        example1 = Tex("2 + 3 = 5", font_size=36)
        example1.next_to(explanation1, DOWN)
        self.play(Write(example1))
        
        with self.voiceover(text="In this example, 2 apples plus 3 apples gives you 5 apples.") as tracker:
            self.wait(2)

        self.play(FadeOut(explanation1), FadeOut(example1))
        
        explanation2 = Text("The symbol for addition is the plus sign (+).", font_size=24)
        explanation2.next_to(title, DOWN)
        self.play(Write(explanation2))
        
        with self.voiceover(text="For instance, 4 + 5 means you need to add 4 and 5 together.") as tracker:
            self.wait(2)

        example2 = Tex("4 + 5 = 9", font_size=36)
        example2.next_to(explanation2, DOWN)
        self.play(Write(example2))
        
        with self.voiceover(text="When you combine 4 and 5, you get 9.") as tracker:
            self.wait(2)

        self.play(FadeOut(explanation2), FadeOut(example2))

        explanation3 = Text("Let's discuss the properties of addition.", font_size=24)
        explanation3.next_to(title, DOWN)
        self.play(Write(explanation3))
        
        with self.voiceover(text="The first property is the Commutative Property.") as tracker:
            self.wait(2)

        commutative_property = Text("Commutative Property: a + b = b + a", font_size=24)
        commutative_property.next_to(explanation3, DOWN)
        self.play(Write(commutative_property))
        
        with self.voiceover(text="This means the order of addition doesn't matter.") as tracker:
            self.wait(2)

        self.play(FadeOut(explanation3), FadeOut(commutative_property))
        
        explanation4 = Text("Next is the Associative Property.", font_size=24)
        explanation4.next_to(title, DOWN)
        self.play(Write(explanation4))
        
        associative_property = Text("Associative Property: (a + b) + c = a + (b + c)", font_size=24)
        associative_property.next_to(explanation4, DOWN)
        self.play(Write(associative_property))
        
        with self.voiceover(text="This means the grouping of numbers does not change the sum.") as tracker:
            self.wait(2)

        self.play(FadeOut(explanation4), FadeOut(associative_property))

        explanation5 = Text("Finally, let's talk about the Identity Property.", font_size=24)
        explanation5.next_to(title, DOWN)
        self.play(Write(explanation5))
        
        identity_property = Text("Identity Property: a + 0 = a", font_size=24)
        identity_property.next_to(explanation5, DOWN)
        self.play(Write(identity_property))
        
        with self.voiceover(text="Adding zero to any number does not change the number.") as tracker:
            self.wait(2)

        self.play(FadeOut(explanation5), FadeOut(identity_property))
        
        closing = Text("Addition is used in our daily lives!", font_size=28)
        closing.next_to(title, DOWN)
        self.play(Write(closing))
        
        with self.voiceover(text="Whether counting items, tracking money, or cooking, addition helps us find totals.") as tracker:
            self.wait(5)

        self.play(FadeOut(closing), FadeOut(title))