from manim import *
from manim import Tex, MathTex
from manim_voiceover import VoiceoverScene
from manim_voiceover.services.gtts import GTTSService

class GraphTranslationsScene(VoiceoverScene):
    def construct(self):
        self.set_speech_service(GTTSService())

        introduction = Tex("Let's explore graph translations.")
        introduction.scale(1.5)
        self.play(Create(introduction))
        self.wait(2)
        self.clear()

        horizontal_intro = Tex("Horizontal Translations: Moving Left or Right")
        horizontal_intro.scale(1.5)
        self.play(Create(horizontal_intro))
        self.wait(2)
        self.clear()

        f_x = axes = Axes(
            x_range=[-5, 5, 1],
            y_range=[-1, 5, 1],
            axis_config={"color": BLUE},
        )
        graph_f_x = f_x.plot(lambda x: x**2, color=YELLOW)
        self.play(Create(f_x), Create(graph_f_x))
        self.wait(2)

        right_translation_text = Tex("Shift Right by \\( h \\) units: \\( f(x) \\mapsto f(x-h) \\)")
        right_translation_text.scale(1.5)
        self.play(Create(right_translation_text))
        self.wait(3)
        
        self.clear()
        translated_graph_right = f_x.plot(lambda x: (x - 3)**2, color=RED)
        self.play(Create(f_x), Create(translated_graph_right))
        self.wait(2)
        
        left_translation_text = Tex("Shift Left by \\( h \\) units: \\( f(x) \\mapsto f(x+h) \\)")
        left_translation_text.scale(1.5)
        self.play(Create(left_translation_text))
        self.wait(3)

        self.clear()
        translated_graph_left = f_x.plot(lambda x: (x + 2)**2, color=GREEN)
        self.play(Create(f_x), Create(translated_graph_left))
        self.wait(2)

        vertical_intro = Tex("Vertical Translations: Moving Up or Down")
        vertical_intro.scale(1.5)
        self.play(Create(vertical_intro))
        self.wait(2)
        self.clear()

        self.play(Create(f_x), Create(graph_f_x))
        self.wait(2)

        upward_translation_text = Tex("Shift Up by \\( k \\) units: \\( f(x) \\mapsto f(x) + k \\)")
        upward_translation_text.scale(1.5)
        self.play(Create(upward_translation_text))
        self.wait(3)

        self.clear()
        translated_graph_up = f_x.plot(lambda x: x**2 + 4, color=PURPLE)
        self.play(Create(f_x), Create(translated_graph_up))
        self.wait(2)

        downward_translation_text = Tex("Shift Down by \\( k \\) units: \\( f(x) \\mapsto f(x) - k \\)")
        downward_translation_text.scale(1.5)
        self.play(Create(downward_translation_text))
        self.wait(3)

        self.clear()
        translated_graph_down = f_x.plot(lambda x: x**2 - 3, color=ORANGE)
        self.play(Create(f_x), Create(translated_graph_down))
        self.wait(2)

        conclusion = Tex("In summary, graph translations shift the graph horizontally or vertically.")
        conclusion.scale(1.5)
        self.play(Create(conclusion))
        self.wait(3)