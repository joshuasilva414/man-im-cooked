from manim_voiceover import VoiceoverScene
from manim_voiceover.services.gtts import GTTSService
import numpy as np
from manim import *

class FastFourierTransformScene(VoiceoverScene):
    def construct(self):
        self.set_speech_service(GTTSService())
        
        title = Text("Fast Fourier Transform", font_size=48)
        self.play(Write(title))
        self.wait(2)
        
        with self.voiceover(text="Let's start by defining a simple signal.") as tracker:
            signal = np.sin(np.linspace(0, 10, 100))
            signal_graph = Axes(x_range=[0, 10, 1], y_range=[-1, 1, 1], axis_config={"color": BLUE})
            signal_plot = signal_graph.plot(lambda x: np.sin(x), color=YELLOW)
            self.play(Create(signal_graph), Create(signal_plot))
        
        self.wait(2)

        with self.voiceover(text="Now, we will compute its Fourier Transform to analyze the frequency components.") as tracker:
            frequencies = np.fft.fft(signal)
            frequency_graph = Axes(x_range=[0, 100, 10], y_range=[-50, 50, 10], axis_config={"color": GREEN})
            freq_plot = frequency_graph.plot(lambda x: 50 * np.abs(np.fft.fft(signal))[int(x/10)], color=RED)
            self.play(FadeOut(signal_graph), FadeOut(signal_plot), Create(frequency_graph), Create(freq_plot))
        
        self.wait(2)

        with self.voiceover(text="This shows the frequency components of the original signal.") as tracker:
            self.play(FadeOut(frequency_graph), FadeOut(freq_plot), FadeOut(title))
        
        final_text = Text("FFT is fundamental in signal processing.", font_size=36)
        self.play(Write(final_text))
        self.wait(3)