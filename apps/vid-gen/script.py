from manim_voiceover import VoiceoverScene
from manim_voiceover.services.gtts import GTTSService
from manim import *

class ParabolicCurvesScene(VoiceoverScene):
    def construct(self):
        self.set_speech_service(GTTSService())

        title = Text("Understanding Parabolic Curves")
        self.play(Write(title))
        self.wait(2)
        self.play(FadeOut(title))

        intro = Tex("Parabolas are U-shaped graphs representing quadratic functions.")
        self.play(Write(intro))
        self.wait(3)
        self.play(FadeOut(intro))

        quadratic_function = Tex("$f(x) = ax^2 + bx + c$")
        self.play(Write(quadratic_function))
        self.wait(3)
        self.play(FadeOut(quadratic_function))

        opening_direction = Tex("If $a > 0$, the parabola opens upward.")
        self.play(Write(opening_direction))
        self.wait(3)
        self.play(FadeOut(opening_direction))

        axis = Axes(x_range=(-3, 3, 1), y_range=(-2, 3, 1))
        parabola_up = axis.plot(lambda x: 0.5 * x**2 - 1, color=BLUE)
        self.play(Create(axis), Create(parabola_up))
        self.wait(3)

        concluding_upward = Tex("This parabola opens upward.")
        self.play(Write(concluding_upward))
        self.wait(2)
        self.play(FadeOut(concluding_upward), FadeOut(axis), FadeOut(parabola_up))

        opening_downward = Tex("If $a < 0$, the parabola opens downward.")
        self.play(Write(opening_downward))
        self.wait(3)
        self.play(FadeOut(opening_downward))

        axis = Axes(x_range=(-3, 3, 1), y_range=(-3, 2, 1))
        parabola_down = axis.plot(lambda x: -0.5 * x**2 + 1, color=RED)
        self.play(Create(axis), Create(parabola_down))
        self.wait(3)

        concluding_downward = Tex("This parabola opens downward.")
        self.play(Write(concluding_downward))
        self.wait(2)
        self.play(FadeOut(concluding_downward), FadeOut(axis), FadeOut(parabola_down))

        vertex_intro = Tex("The vertex is the highest or lowest point on the parabola.")
        self.play(Write(vertex_intro))
        self.wait(3)
        self.play(FadeOut(vertex_intro))

        vertex_arrow = Arrow(start=RIGHT * 2 + DOWN, end=RIGHT * 2 + UP, buff=0)
        vertex_label = Tex("Vertex").next_to(vertex_arrow.get_end(), RIGHT)
        self.play(Create(vertex_arrow), Write(vertex_label))
        self.wait(3)
        self.play(FadeOut(vertex_arrow), FadeOut(vertex_label))

        axis_of_symmetry = Line(start=RIGHT * 2, end=RIGHT * 2 + UP * 3, color=YELLOW)
        self.play(Create(axis_of_symmetry))
        self.wait(2)

        symmetry_intro = Tex("The parabola is symmetric about the axis.")
        self.play(Write(symmetry_intro))
        self.wait(3)
        self.play(FadeOut(symmetry_intro), FadeOut(axis_of_symmetry))

        y_intercept_intro = Tex("The y-intercept occurs when $x = 0$.")
        self.play(Write(y_intercept_intro))
        self.wait(3)
        self.play(FadeOut(y_intercept_intro))

        y_intercept = Dot(point=ORIGIN, color=GREEN)
        y_arrow = Arrow(start=UP, end=ORIGIN, buff=0)
        self.play(Create(y_intercept), Create(y_arrow))
        self.wait(3)
        
        x_intercepts_intro = Tex("X-intercepts occur where the parabola crosses the x-axis.")
        self.play(Write(x_intercepts_intro))
        self.wait(3)
        self.play(FadeOut(x_intercepts_intro))

        x_intercept1 = Dot(point=LEFT + DOWN, color=PURPLE)
        x_intercept2 = Dot(point=RIGHT + DOWN, color=PURPLE)
        self.play(Create(x_intercept1), Create(x_intercept2))
        self.wait(3)

        concluding_intro = Tex("Parabolas have applications in various fields.")
        self.play(Write(concluding_intro))
        self.wait(3)

        applications = Tex("1. Projectile motion", "2. Satellite dishes", "3. Optimization problems")
        applications.arrange(DOWN)
        self.play(Write(applications[0]))
        self.wait(2)
        self.play(Write(applications[1]))
        self.wait(2)
        self.play(Write(applications[2]))
        self.wait(3)

        self.play(FadeOut(applications))
        concluding_remarks = Tex("Understanding parabolas is crucial in mathematics.")
        self.play(Write(concluding_remarks))
        self.wait(3)

        self.play(FadeOut(concluding_remarks))