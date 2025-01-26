from manim_voiceover import VoiceoverScene
from manim_voiceover.services.gtts import GTTSService
from manim import *

class FastFourierScene(VoiceoverScene):
    def construct(self):
        self.set_speech_service(GTTSService())
        
        title = Tex("Fast Fourier Transform", font_size=48)
        self.play(Write(title))
        
        self.wait(1)
        
        with self.voiceover(text="Let me explain the Fast Fourier Transform.") as tracker:
            self.play(FadeOut(title))
            self.play(Create(Rectangle(width=6, height=3)))
            
        transform_info = Tex("The Fast Fourier Transform, or FFT, ", font_size=24).shift(UP*0.5)
        examples = Tex("Breaks down a signal into its constituent frequencies.", font_size=24).shift(DOWN*0.5)
        
        with self.voiceover(text="The FFT efficiently computes the Discrete Fourier Transform.") as tracker:
            self.play(Write(transform_info))
            self.play(Write(examples))
        
        self.wait(2)

        final_note = Tex("This allows us to analyze frequencies in signals quickly.", font_size=24)
        self.play(Transform(transform_info, final_note))
        
        self.wait(2)
        self.clear()