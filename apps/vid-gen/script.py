from manim import *
from manim import Tex
from manim_voiceover import VoiceoverScene
from manim_voiceover.services.gtts import GTTSService

class DerivativeExplanationScene(VoiceoverScene):
    def construct(self):
        self.set_speech_service(GTTSService())

        title = Tex("Understanding Derivatives", font_size=40)
        self.play(Write(title))
        self.wait(1)
        self.play(FadeOut(title))
        
        graph = Axes(
            x_range=[-3, 3, 1],
            y_range=[-1, 9, 1],
            axis_config={"color": BLUE},
        )
        self.play(Create(graph))

        function_graph = graph.plot(lambda x: x**2, color=GREEN)
        self.play(Create(function_graph))
        
        with self.voiceover(text="Here, we see the graph of the function f(x) = x^2.") as tracker:
            self.play(Create(function_graph))
        self.wait(2)

        tangent_line = Line(start=graph.c2p(1, 1), end=graph.c2p(2, 4), color=ORANGE)
        self.play(Create(tangent_line))

        with self.voiceover(text="Let's focus on the slope of the tangent line at x equals one.") as tracker:
            self.play(Create(tangent_line))
        self.wait(2)

        tangent_point = Dot(point=graph.c2p(1, 1), color=RED)
        self.play(Create(tangent_point))
        
        with self.voiceover(text="At this point, we can calculate the derivative, which represents the slope of this tangent line.") as tracker:
            self.play(Create(tangent_point))
        self.wait(2)

        self.play(FadeOut(tangent_line), FadeOut(tangent_point))

        secant_line = Line(start=graph.c2p(0.5, 0.25), end=graph.c2p(1.5, 2.25), color=YELLOW)
        self.play(Create(secant_line))
        
        with self.voiceover(text="A secant line connects two points on the curve, illustrating the average rate of change.") as tracker:
            self.play(Create(secant_line))
        self.wait(2)

        limit_line = Line(start=graph.c2p(1.1, 1.21), end=graph.c2p(2, 4), color=PURPLE)
        self.play(Create(limit_line))
        
        with self.voiceover(text="As we move the points closer together, the secant line approaches the tangent line.") as tracker:
            self.play(Create(limit_line))
        self.wait(2)

        self.play(FadeOut(secant_line), FadeOut(limit_line))

        derivative_value = Tex("f'(1) = 2", font_size=40)
        derivative_value.to_edge(UP)
        self.play(Write(derivative_value))
        
        with self.voiceover(text="The slope of the tangent line at this point is the derivative f'(1) = 2.") as tracker:
            self.play(Write(derivative_value))
        self.wait(2)

        decreasing_graph = graph.plot(lambda x: -x**2 + 4, color=GREEN)
        self.play(Create(decreasing_graph))
        
        with self.voiceover(text="Now, let's look at a decreasing function f(x) = -x^2 + 4.") as tracker:
            self.play(Create(decreasing_graph))
        self.wait(2)

        tangent_line_decreasing = Line(start=graph.c2p(1, 3), end=graph.c2p(2, 0), color=ORANGE)
        self.play(Create(tangent_line_decreasing))
        
        with self.voiceover(text="Here, the derivative at x equals one is negative, indicating the function is decreasing.") as tracker:
            self.play(Create(tangent_line_decreasing))
        self.wait(2)

        self.play(FadeOut(tangent_line_decreasing), FadeOut(decreasing_graph))

        summary_text = Tex("Derivatives: The Slope of the Tangent Line", font_size=30)
        summary_text.move_to(ORIGIN)
        self.play(Write(summary_text))
        
        with self.voiceover(text="In summary, derivatives represent the slope of the tangent line and the rate of change of functions.") as tracker:
            self.play(Write(summary_text))
        self.wait(2)

        self.play(FadeOut(summary_text))
        self.play(FadeOut(graph))