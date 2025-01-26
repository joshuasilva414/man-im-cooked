from manim_voiceover import VoiceoverScene
from manim_voiceover.services.gtts import GTTSService
from manim import *

class PythagoreanTheoremScene(VoiceoverScene):
    def construct(self):
        self.set_speech_service(GTTSService())

        triangle = Polygon(ORIGIN, 3 * RIGHT, 3 * RIGHT + 3 * UP, fill_color=BLUE, fill_opacity=0.5)
        hypotenuse = Line(ORIGIN, 3 * RIGHT + 3 * UP, color=YELLOW)
        square1 = Square(side_length=3, color=RED, fill_opacity=0.5).shift(1.5 * UP + 1.5 * LEFT)
        square2 = Square(side_length=3, color=GREEN, fill_opacity=0.5).shift(1.5 * DOWN + 1.5 * RIGHT)
        square_hypotenuse = Square(side_length=6, color=PURPLE, fill_opacity=0.5).shift(UP + RIGHT)

        with self.voiceover(text="This is a right triangle, where we will illustrate the Pythagorean theorem.") as tracker:
            self.play(Create(triangle))
        
        with self.voiceover(text="The lengths of the two shorter sides are 3 each.") as tracker:
            self.play(Create(square1), Create(square2))
        
        with self.voiceover(text="According to the Pythagorean theorem, the square of the hypotenuse equals the sum of the squares of the other two sides.") as tracker:
            self.play(Create(hypotenuse), Create(square_hypotenuse))
        
        with self.voiceover(text="Hence, 3 squared plus 3 squared equals the hypotenuse squared.") as tracker:
            self.wait(2)