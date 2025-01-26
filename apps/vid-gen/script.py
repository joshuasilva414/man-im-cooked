from manim_voiceover import VoiceoverScene
from manim_voiceover.services.gtts import GTTSService
from manim import *

class PythagoreanTheoremScene(VoiceoverScene):
    def construct(self):
        self.set_speech_service(GTTSService())

        title = Text("Pythagorean Theorem").scale(1.5)
        self.play(Write(title))
        self.wait(1)

        self.play(FadeOut(title))

        right_triangle = Polygon(0, 0, 3, 0, 0, 4, color=BLUE)
        hypotenuse = Line(3, 0, 0, 4, color=YELLOW)
        a_label = MathTex("a").next_to(right_triangle.get_vertices()[0:2], DOWN)
        b_label = MathTex("b").next_to(right_triangle.get_vertices()[1:3], RIGHT)
        c_label = MathTex("c").next_to(hypotenuse, UP)

        with self.voiceover(text="Let's draw a right triangle.") as tracker:
            self.play(Create(right_triangle))
        with self.voiceover(text="The sides are labeled 'a' and 'b', and the hypotenuse is 'c'.") as tracker:
            self.play(Create(hypotenuse), Write(a_label), Write(b_label), Write(c_label))
        
        self.wait(2)

        formula = MathTex("a^2 + b^2 = c^2").scale(1.5)
        formula.move_to(UP * 3)

        with self.voiceover(text="According to the Pythagorean theorem, a² plus b² equals c².") as tracker:
            self.play(Write(formula))

        self.wait(2)