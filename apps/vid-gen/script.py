from manim import *
from manim_voiceover import VoiceoverScene
from manim_voiceover.services.gtts import GTTSService

class ChainRuleExplanation(VoiceoverScene):
    def construct(self):
        self.set_speech_service(GTTSService())

        title = Text("The Chain Rule", font_size=32)
        self.play(Write(title))
        self.wait(1)
        
        with self.voiceover(text="The Chain Rule is a key concept in calculus used to differentiate composite functions.") as tracker:
            self.wait(2)

        self.play(FadeOut(title))

        definition = Text(r"If $f$ and $g$ are functions, then $\\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)$", font_size=28)
        self.play(Write(definition))
        self.wait(3)

        with self.voiceover(text="In this expression, $f$ is the outer function and $g$ is the inner function.") as tracker:
            self.wait(3)

        self.play(FadeOut(definition))

        example_text = Text("Example: Let $h(x) = (3x + 1)^2$.", font_size=28)
        self.play(Write(example_text))
        self.wait(3)

        with self.voiceover(text="To apply the chain rule, we identify the outer and inner functions.") as tracker:
            self.wait(2)

        self.play(FadeOut(example_text))

        outer_inner = Text("Outer: $f(u) = u^2$ \\ \nInner: $g(x) = 3x + 1$", font_size=28)
        self.play(Write(outer_inner))
        self.wait(4)

        with self.voiceover(text="Next, we differentiate both functions, starting with the outer function.") as tracker:
            self.wait(3)

        self.play(FadeOut(outer_inner))

        differentiation = Text("Differentiating gives us: \\ $f'(u) = 2u\\$ \\ and \\ $g'(x) = 3$", font_size=28)
        self.play(Write(differentiation))
        self.wait(4)

        with self.voiceover(text="Now, we apply the chain rule by multiplying these derivatives together.") as tracker:
            self.wait(3)

        self.play(FadeOut(differentiation))

        apply_chain_rule = Text("Thus, $h'(x) = f'(g(x)) \cdot g'(x) = 2(3x + 1) \cdot 3$", font_size=28)
        self.play(Write(apply_chain_rule))
        self.wait(4)

        with self.voiceover(text="This simplifies to $h'(x) = 6(3x + 1)$.") as tracker:
            self.wait(2)

        self.play(FadeOut(apply_chain_rule))

        final_result = Text("Final Result: $h'(x) = 18x + 6$", font_size=28)
        self.play(Write(final_result))
        self.wait(3)

        with self.voiceover(text="And that concludes our explanation of the chain rule!") as tracker:
            self.wait(3)

        self.play(FadeOut(final_result))