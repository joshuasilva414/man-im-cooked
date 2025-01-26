from manim_voiceover import VoiceoverScene
from manim_voiceover.services.gtts import GTTSService
from manim import *

class MyGreetingScene(VoiceoverScene):
    def construct(self):
        self.set_speech_service(GTTSService())
        
        greeting_text = Text("Hello there!", font_size=72)
        
        with self.voiceover(text="Here is a friendly greeting.") as tracker:
            self.play(Write(greeting_text))
            self.wait(1)
        
        self.clear()