from manim import *

class CalculusIntro(Scene):
    def construct(self):
        self.introduction()
        self.differentiation()
        self.integration()

    def introduction(self):
        title = Text("Introduction to Calculus").scale(1.5)
        self.play(Write(title))
        self.wait(2)
        self.clear()

    def differentiation(self):
        diff_title = Text("Differentiation").scale(1.5)
        diff_eq = MathTex(r"f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}").scale(1)
        self.play(Write(diff_title))
        self.wait(1)
        self.play(Write(diff_eq))
        self.wait(3)
        self.clear()

    def integration(self):
        integration_title = Text("Integration").scale(1.5)
        int_eq = MathTex(r"\int f(x) \, dx = F(x) + C").scale(1)
        self.play(Write(integration_title))
        self.wait(1)
        self.play(Write(int_eq))
        self.wait(3)
        self.clear()