# Example file showing a circle moving on screen
import pygame

# pygame setup
pygame.init()

windowWidth = 1280
windowHeight = 720

screen = pygame.display.set_mode((windowWidth, windowHeight))
clock = pygame.time.Clock()
running = True
dt = 0



game_font = pygame.font.SysFont("Cambria", 40)

while running:
    # poll for events
    # pygame.QUIT event means the user clicked X to close your window
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    # fill the screen with a color to wipe away anything from last frame
    screen.fill("#333333")

    text_surface = game_font.render("Mix Calculator", True, (255, 255, 255))
    screen.blit(text_surface, (10, 10))

    pygame.draw.rect(screen, "white", pygame.Rect(windowWidth/2 - 50 , windowHeight/2 - 25, 100, 50))


    # flip() the display to put your work on screen
    pygame.display.flip()

    # limits FPS to 60
    # dt is delta time in seconds since last frame, used for framerate-
    # independent physics.
    dt = clock.tick(60) / 1000

pygame.quit()