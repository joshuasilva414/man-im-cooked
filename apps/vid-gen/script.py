from manim import *
from manim_voiceover import VoiceoverScene
from manim_voiceover.services.gtts import GTTSService

class GraphingExplanation(VoiceoverScene):
    def construct(self):
        self.set_speech_service(GTTSService())

        self.introduction_scene()
        self.clear_screen()

        self.coordinate_system_scene()
        self.clear_screen()

        self.plotting_points_scene()
        self.clear_screen()

        self.linear_equations_scene()
        self.clear_screen()

        self.analyzing_graphs_scene()
        self.clear_screen()

        self.practice_scene()

    def clear_screen(self):
        self.play(*[FadeOut(mob) for mob in self.mobjects])

    def introduction_scene(self):
        title = Tex("Graphing in Mathematics")
        subtitle = Tex("A Visual Way to Represent Relationships").scale(0.8)
        subtitle.next_to(title, DOWN)
        self.play(Write(title))
        self.play(FadeIn(subtitle, shift=DOWN))
        self.wait(2)

        with self.voiceover(text="Graphing is a powerful tool used to visualize mathematical relationships and functions. Let's explore this concept together.") as tracker:
            self.wait(2)

    def coordinate_system_scene(self):
        title = Tex("The Cartesian Coordinate System")
        title.to_edge(UP)
        self.play(Write(title))

        axes = Axes(x_range=[-5, 5, 1], y_range=[-5, 5, 1], axis_config={"color": BLUE})
        axes_labels = axes.get_axis_labels(x_label="X-axis", y_label="Y-axis")

        with self.voiceover(text="The Cartesian coordinate system consists of two perpendicular lines, the x-axis and the y-axis, intersecting at the origin.") as tracker:
            self.play(Create(axes), Write(axes_labels))
            self.wait(2)

    def plotting_points_scene(self):
        title = Tex("Plotting Points on the Graph")
        title.to_edge(UP)
        self.play(Write(title))

        point_a = Dot(Point(2, 3), color=YELLOW)
        point_b = Dot(Point(-1, -2), color=GREEN)
        point_c = Dot(Point(-3, 4), color=RED)

        with self.voiceover(text="Let's plot some points. The point (2, 3) is located 2 units to the right and 3 units up from the origin.") as tracker:
            self.play(Create(point_a))
            self.wait(2)

        with self.voiceover(text="The point (-1, -2) is found by moving 1 unit to the left and 2 units down.") as tracker:
            self.play(Create(point_b))
            self.wait(2)

        with self.voiceover(text="Finally, the point (-3, 4) is 3 units to the left and 4 units up.") as tracker:
            self.play(Create(point_c))
            self.wait(2)

    def linear_equations_scene(self):
        title = Tex("Graphing Linear Equations")
        title.to_edge(UP)
        self.play(Write(title))

        axes = Axes(x_range=[-5, 5, 1], y_range=[-5, 5, 1], axis_config={"color": BLUE})
        line = axes.plot(lambda x: 2*x + 3, color=YELLOW)

        with self.voiceover(text="Now, let's graph the linear equation y equals 2x plus 3. This represents a line with a slope of 2 and a y-intercept of 3.") as tracker:
            self.play(Create(axes))
            self.play(Create(line))
            self.wait(3)

    def analyzing_graphs_scene(self):
        title = Tex("Analyzing Graphs")
        title.to_edge(UP)
        self.play(Write(title))

        axes = Axes(x_range=[-5, 5, 1], y_range=[-5, 5, 1], axis_config={"color": BLUE})
        line1 = axes.plot(lambda x: x, color=YELLOW)
        line2 = axes.plot(lambda x: -x, color=RED)

        with self.voiceover(text="When analyzing graphs, we look at the slope, intercepts, and how the graph behaves. Here, we have two lines: one increasing and the other decreasing.") as tracker:
            self.play(Create(axes))
            self.play(Create(line1), Create(line2))
            self.wait(3)

    def practice_scene(self):
        title = Tex("Practice Graphing")
        title.to_edge(UP)
        self.play(Write(title))

        examples = [
            Tex(r"1. Graph\: y = \frac{1}{2}x + 1"),
            Tex(r"2. Graph\: y = -x + 2"),
            Tex(r"3. Graph\: y = 3x - 4"),
        ]
        for i, example in enumerate(examples):
            example.next_to(title, DOWN, buff=0.5 + i)
            self.play(Write(example))

        with self.voiceover(text="Now it's your turn! Try graphing these linear equations on your own. Remember to find the slope and y-intercept for each equation.") as tracker:
            self.wait(3)