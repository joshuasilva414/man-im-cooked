from manim import *
from manim import Tex, MathTex
from manim_voiceover import VoiceoverScene
from manim_voiceover.services.gtts import GTTSService

class AdditionScene(VoiceoverScene):
    def construct(self):
        self.set_speech_service(GTTSService())

        title = Tex("Understanding Addition").to_edge(UP)
        self.play(Write(title))

        with self.voiceover(text="Today, we will learn about the concept of addition.") as tracker:
            self.play(FadeIn(title))

        self.clear()

        explanation_1 = Tex("Addition is combining two or more numbers to get a total.").scale(0.7).to_edge(UP)
        self.play(Write(explanation_1))

        with self.voiceover(text="Let's start with two simple numbers, 2 and 3.") as tracker:
            self.play(FadeIn(explanation_1))
        
        number_2 = MathTex("2").set_color(BLUE).scale(1.5)
        plus_sign = MathTex("+").set_color(GREEN).scale(1.5)
        number_3 = MathTex("3").set_color(RED).scale(1.5)
        equals_sign = MathTex("=").set_color(YELLOW).scale(1.5)
        result = MathTex("5").set_color(PURPLE).scale(1.5)

        self.play(Write(number_2), Write(plus_sign), Write(number_3))
        
        with self.voiceover(text="We take the first number, 2, and add it to the second number, 3.") as tracker:
            self.wait(2)

        self.play(Write(equals_sign))
        
        with self.voiceover(text="The result, or sum, is 5.") as tracker:
            self.play(Write(result))
        
        self.wait(1)

        self.clear()

        explanation_2 = Tex("We can also represent addition with objects.").scale(0.7).to_edge(UP)
        self.play(Write(explanation_2))

        with self.voiceover(text="For example, let's use apples.") as tracker:
            self.wait(2)

        apple_1 = Circle(radius=0.3, color=RED).shift(LEFT)
        apple_2 = Circle(radius=0.3, color=RED).shift(RIGHT)

        self.play(Create(apple_1), Create(apple_2))

        with self.voiceover(text="Here are two apples.") as tracker:
            self.wait(2)

        plus_sign_2 = MathTex("+").set_color(GREEN).scale(1.5).next_to(apple_2, RIGHT)

        self.play(Write(plus_sign_2))

        apple_3 = Circle(radius=0.3, color=RED).shift(RIGHT * 3)

        self.play(Create(apple_3))

        with self.voiceover(text="Now, let's add one more apple.") as tracker:
            self.wait(2)

        equals_sign_2 = MathTex("=").set_color(YELLOW).next_to(apple_3, RIGHT)
        result_apples = Tex("3 \\, \\text{Apples}").next_to(equals_sign_2, RIGHT)

        self.play(Write(equals_sign_2), Write(result_apples))

        with self.voiceover(text="In total, we have three apples.") as tracker:
            self.wait(2)

        self.clear()

        conclusion = Tex("In summary, addition combines numbers or objects to find a total.").scale(0.7).to_edge(UP)
        self.play(Write(conclusion))

        with self.voiceover(text="Thank you for learning about addition with us today!") as tracker:
            self.wait(2)