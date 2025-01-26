from manim_voiceover import VoiceoverScene
from manim_voiceover.services.gtts import GTTSService
from manim import *

class MultiplicativePropertyScene(VoiceoverScene):
    def construct(self):
        self.set_speech_service(GTTSService())

        title = Tex("Multiplicative Properties", font_size=36)
        self.play(Write(title))
        self.wait(1)
        
        self.play(FadeOut(title))
        
        zero_property = Tex("1. Multiplicative Property of Zero: ", font_size=24)
        zero_example = Tex("a \\times 0 = 0", font_size=24)
        
        with self.voiceover(text="Let's begin with the property of zero. The multiplicative property of zero states that any number multiplied by zero equals zero.") as tracker:
            self.play(Write(zero_property))
            self.wait(1)
            self.play(Write(zero_example))
            self.wait(2)
        
        self.play(FadeOut(zero_property), FadeOut(zero_example))
        
        identity_property = Tex("2. Multiplicative Identity: ", font_size=24)
        identity_example = Tex("a \\times 1 = a", font_size=24)
        
        with self.voiceover(text="Next, we have the multiplicative identity. This property says that when you multiply any number by one, it remains unchanged.") as tracker:
            self.play(Write(identity_property))
            self.wait(1)
            self.play(Write(identity_example))
            self.wait(2)
        
        self.play(FadeOut(identity_property), FadeOut(identity_example))
        
        inverse_property = Tex("3. Multiplicative Inverse: ", font_size=24)
        inverse_example = Tex("a \\times \\frac{1}{a} = 1 \\text{ (for } a \\neq 0\\text{)}", font_size=20)
        
        with self.voiceover(text="The multiplicative inverse states that every non-zero number has an inverse, which you multiply with to get one.") as tracker:
            self.play(Write(inverse_property))
            self.wait(1)
            self.play(Write(inverse_example))
            self.wait(3)

        self.play(FadeOut(inverse_property), FadeOut(inverse_example))
        
        distributive_property = Tex("4. Distributive Property: ", font_size=24)
        distributive_example = Tex("a(b + c) = ab + ac", font_size=24)
        
        with self.voiceover(text="The distributive property shows how multiplication distributes over addition or subtraction.") as tracker:
            self.play(Write(distributive_property))
            self.wait(1)
            self.play(Write(distributive_example))
            self.wait(3)

        self.play(FadeOut(distributive_property), FadeOut(distributive_example))
        
        exponent_property = Tex("5. Properties of Exponents: ", font_size=24)
        exponent_example = Tex("a^m \\times a^n = a^{m+n}", font_size=24)

        with self.voiceover(text="Finally, we have properties of exponents, where multiplying powers with the same base leads to adding their exponents.") as tracker:
            self.play(Write(exponent_property))
            self.wait(1)
            self.play(Write(exponent_example))
            self.wait(3)

        self.play(FadeOut(exponent_property), FadeOut(exponent_example))
        
        conclusion = Tex("These properties are fundamental in arithmetic and algebra.", font_size=24)
        
        with self.voiceover(text="In conclusion, these multiplicative properties are essential tools that simplify computations and enhance your understanding of mathematics.") as tracker:
            self.play(Write(conclusion))
            self.wait(3)
        
        self.play(FadeOut(conclusion))