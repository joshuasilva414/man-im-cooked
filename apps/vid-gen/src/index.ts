import { Hono } from "hono";
import * as fs from "node:fs/promises";
import { $ } from "bun";
import OpenAI from "openai";
import { cors } from "hono/cors"; // Import CORS if needed
import { Blob } from "node:buffer";
import { Data } from "hono/dist/types/context";
import { open } from "node:fs";
import {
  ChatCompletionMessage,
  ChatCompletionMessageParam,
} from "openai/resources";

const client = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"],
});

const app = new Hono();

app.use(cors());

app.get("/generate", async (c) => {
  const userQuery = await c.req.query("query");

  if (!userQuery) {
    return c.text("Please provide the 'query' parameter", 400);
  }

  let history: ChatCompletionMessageParam[] = [
    {
      role: "system",
      name: "system",
      content: `
            you are a helpful math robot that helps explain math concepts to students.
            `,
    },
    {
      role: "user",
      name: "user",
      content: userQuery.toString(),
    },
  ];

  try {
    const scriptCompletion = await client.chat.completions.create({
      messages: history,
      model: "gpt-4o-mini",
    });

    history.push({
      role: "user",
      name: "ChatGPT",
      content: scriptCompletion.choices[0].message.content!,
    });

    history.push({
      role: "system",
      name: "system",
      content: `
            Now output manim code that will make an animation using the script. Make sure you only respond with python code and that the code will run and 
            have a result without modification. make sure the code is not commented and does not have 
            three apostrophies before or after the code. Also make sure that everything is 
            essentially in one scene by clearing the screen before you start a new screen. you must use the voice over function to create voice over explanations of each scene. here is some example code of a voiceover being used to voice over a circle being drawn. Your code should be following the same format, but producing a much longer video:
            ----------------------------------------------------------------
            from manim_voiceover import VoiceoverScene
            from manim_voiceover.services.gtts import GTTSService

            class MyAwesomeScene(VoiceoverScene):
              def construct(self):
                self.set_speech_service(GTTSService())

                with self.voiceover(text="This circle is drawn as I speak.") as tracker:
                    self.play(Create(circle))
            ----------------------------------------------------------------
            
            The dimensions of the video will be 854x480 at 24fps, so make sure content does not get cut off.

            The total animation time should be several minutes long, so take your time to explain the concepts in detail. below is an example script that explains the fast fourier transform. however it still needs voiceover
            from manim import *

class FFTExplanation(Scene):
    def construct(self):
        # Scene 1: FFT Introduction
        self.intro_scene()
        self.clear_screen()

        # Scene 2: DFT Calculation
        self.dft_scene()
        self.clear_screen()

        # Scene 3: FFT Split
        self.split_scene()
        self.clear_screen()

        # Scene 4: FFT Recursion
        self.recursion_scene()
        self.clear_screen()

        # Scene 5: FFT Combine
        self.combine_scene()
        self.clear_screen()

        # Scene 6: FFT Result
        self.result_scene()

    def clear_screen(self):
        """Utility function to clear the screen between scenes."""
        self.play(*[FadeOut(mob) for mob in self.mobjects])

    def intro_scene(self):
        """Scene 1: FFT Introduction."""
        title = Tex("Fast Fourier Transform (FFT)")
        subtitle = Tex("An efficient algorithm for computing the DFT").scale(0.8)
        subtitle.next_to(title, DOWN)
        self.play(Write(title))
        self.play(FadeIn(subtitle, shift=DOWN))
        self.wait(2)

        # Create a simple signal
        axes = Axes(
            x_range=[0, 8, 1],
            y_range=[-2, 2, 1],
            axis_config={"color": BLUE},
        )
        labels = axes.get_axis_labels(x_label="Time", y_label="Amplitude")
        signal_points = [0, 1, 0, -1, 0, 1, 0, -1]
        signal = axes.plot_line_graph(
            x_values=list(range(8)),
            y_values=signal_points,
            line_color=YELLOW,
            add_vertex_dots=True,
            vertex_dot_radius=0.1,
        )
        self.play(Create(axes), Write(labels))
        self.play(Create(signal))
        self.wait(2)

    def dft_scene(self):
        """Scene 2: DFT Calculation."""
        title = Tex("Discrete Fourier Transform (DFT)")
        title.to_edge(UP)
        self.play(Write(title))

        dft_formula = MathTex(
            "X_k = \\sum_{n=0}^{N-1} x_n \\cdot e^{-i 2\\pi k n / N}"
        ).scale(0.9)

        complexity = Tex("Complexity: $O(N^2)$").next_to(dft_formula, DOWN)
        self.play(Write(dft_formula))
        self.wait()
        self.play(Write(complexity))
        self.wait(2)

    def split_scene(self):
        """Scene 3: FFT Split."""
        title = Tex("FFT Divide-and-Conquer Strategy")
        title.to_edge(UP)
        self.play(Write(title))

        # Original array
        original = self.create_array([0, 1, 2, 3, 4, 5, 6, 7], "Original array")
        self.play(FadeIn(original))

        # Split into even and odd
        even = self.create_array([0, 2, 4, 6], "Even indices").shift(LEFT * 2 + DOWN)
        odd = self.create_array([1, 3, 5, 7], "Odd indices").shift(RIGHT * 2 + DOWN)

        arrows = VGroup(
            CurvedArrow(original.get_bottom(), even.get_top(), angle=-TAU / 4),
            CurvedArrow(original.get_bottom(), odd.get_top(), angle=TAU / 4),
        )

        self.play(Create(arrows))
        self.play(FadeIn(even), FadeIn(odd))
        self.wait(2)

    def recursion_scene(self):
        """Scene 4: FFT Recursion."""
        title = Tex("Recursive Application")
        title.to_edge(UP)
        self.play(Write(title))

        levels = 3
        tree = self.create_recursion_tree(levels)
        self.play(Create(tree))
        self.wait(2)

    def combine_scene(self):
        """Scene 5: FFT Combine."""
        title = Tex("Combining Results (Butterfly Operation)")
        title.to_edge(UP)
        self.play(Write(title))

        # Create two smaller FFT results
        fft_even = self.create_fft_result([1, -1, 1, -1], "FFT (Even)").shift(LEFT * 2)
        fft_odd = self.create_fft_result([1j, -1j, 1j, -1j], "FFT (Odd)").shift(RIGHT * 2)

        # Create combined result
        combined = self.create_fft_result([2, 0, 2, 0], "Combined Result").shift(DOWN * 2)

        self.play(FadeIn(fft_even), FadeIn(fft_odd))
        self.wait()

        # Create butterfly connections
        connections = VGroup()
        for e, o in zip(fft_even[0], fft_odd[0]):
            connection1 = ArcBetweenPoints(
                e.get_center(), combined[0].get_center(), angle=-TAU / 4, color=YELLOW
            )
            connection2 = ArcBetweenPoints(
                o.get_center(), combined[0].get_center(), angle=TAU / 4, color=YELLOW
            )
            connections.add(connection1, connection2)

        equation = MathTex(
            "X_k = E_k + \\omega_N^k O_k\\\\",
            "X_{k+N/2} = E_k - \\omega_N^k O_k"
        ).scale(0.8).next_to(combined, DOWN)

        self.play(Create(connections), run_time=2)
        self.play(FadeIn(combined), Write(equation))
        self.wait(2)

    def result_scene(self):
        """Scene 6: FFT Result."""
        title = Tex("FFT Complexity: $O(N \\log N)$")
        title.to_edge(UP)

        comparison = VGroup(
            Tex("DFT: $O(N^2)$").scale(1.2),
            Tex("FFT: $O(N \\log N)$").scale(1.2)
        ).arrange(RIGHT, buff=2)

        self.play(Write(title))
        self.play(FadeIn(comparison))
        self.wait(2)

        # Show big-O graph
        axes = Axes(
            x_range=[1, 64, 8],  # Start from 1 to avoid log2(0)
            y_range=[0, 4096, 512],
            axis_config={"include_numbers": True}
        )
        axes_labels = axes.get_axis_labels(x_label="N", y_label="Operations")

        dft_graph = axes.plot(lambda x: x**2, color=RED)
        fft_graph = axes.plot(lambda x: x * np.log2(x) if x > 0 else 0, color=GREEN)  # Avoid log2(0)

        graphs = VGroup(
            axes, axes_labels, dft_graph, fft_graph
        ).scale(0.6).shift(DOWN)

        self.play(Create(axes), Write(axes_labels))
        self.play(Create(dft_graph), run_time=2)
        self.play(Create(fft_graph), run_time=2)
        self.wait(3)
    # Utility functions for creating visual elements
    def create_array(self, elements, text):
        array = VGroup()
        for i, num in enumerate(elements):
            square = Square(side_length=0.6, fill_color=BLUE, fill_opacity=0.5)
            text = Text(str(num)).scale(0.4)
            group = VGroup(square, text).arrange(IN)
            array.add(group)
        array.arrange(RIGHT, buff=0.2)
        label = Tex(text).scale(0.6).next_to(array, UP)
        return VGroup(array, label)

    def create_recursion_tree(self, levels):
        root = Circle(radius=0.3, color=GREEN).shift(UP * 2)
        tree = VGroup(root)
        current_level = [root]

        for level in range(1, levels):
            new_level = []
            for node in current_level:
                left = Circle(radius=0.2, color=RED).next_to(node, DL * 2, buff=1)
                right = Circle(radius=0.2, color=BLUE).next_to(node, DR * 2, buff=1)
                tree.add(left, right)
                tree.add(Line(node.get_center(), left.get_center()))
                tree.add(Line(node.get_center(), right.get_center()))
                new_level.extend([left, right])
            current_level = new_level
        return tree

    def create_fft_result(self, values, text):
        group = VGroup()
        for val in values:
            txt = Tex(f"{val}").scale(0.5)
            bg = SurroundingRectangle(txt, buff=0.2, color=WHITE)
            group.add(VGroup(bg, txt))
        group.arrange(DOWN, buff=0.5)
        label = Tex(text).scale(0.6).next_to(group, UP)
        return VGroup(label, group)`,
            
    });

    const chatCompletion = await client.chat.completions.create({
      messages: history,
      model: "gpt-4o-mini",
    });

    // console.log(chatCompletion.choices[0].message.content);

    if (scriptCompletion.choices.length === 0) {
      return c.text("Unable to generate a response at this time", 500);
    }

    await fs.writeFile("script.py", chatCompletion.choices[0].message.content!);

    try {
      const output =
        await $`manim -ql script.py -c manim.cfg -o script.mp4`.text();
      console.log(output);
    } catch (err: any) {
      console.log(`Failed with code ${err.exitCode}`);
      console.log(err.stdout.toString());
      console.log(err.stderr.toString());
    }

    await (await fs.open("./media/script.mp4")).datasync();
    const vid = await (await fs.open("./media/script.mp4")).readFile();

    return c.body(vid as any, 200, {
      "Content-Type": "video/mp4",
      "Content-Encoding": "binary",
      "Content-Length": vid.length.toString(),
    });
  } catch (error: unknown) {
    console.error("Error:", error);
    return c.text(
      "An unknown error occurred while generating the response",
      500
    );
  }
});

export default {
  port: 3001,
  fetch: app.fetch,
  idleTimeout: 30,
};
