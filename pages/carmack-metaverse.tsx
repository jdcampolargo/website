function About() {
  return <div>
          
These are my notes for my (John Carmack) Connect 2021 talk.

  The "raw data" from my retrospective scan of tweets, responses to my request-for-questions, and posts follows the outline I had planned to talk over.
  
  Obviously I didn't even get through my organized topics, let alone everything I had tagged as maybe-interesting-to-talk-about.
  
  ---------------------------------------------------
  
  Welcome to Connect everyone!
  
  My process for these talks is to skim over all the internal posts and public tweets that I made in the last year to refresh my memory, then try to sort them into some kind of vaguely coherent topic flow.
  
  I’m usually a bit of a counterpoint to the grand strategic narratives with my nuts and bolts focus, and I’m traditionally a lot grumpier and more critical, but I have a lot of things to be happy about this year.
  
  The most important thing is that Quest 2 has been a big success.
  It was better, faster, and cheaper — a rare combination!
  if we didn’t see any traction with that, it would be a very bad sign!
  
  We got several other wins that I have been pushing for:
  ————————————
  Air Link got released, and it has been great. Not everyone has good enough WiFi, but a lot of people get a good deal of value out of it.
  Friend’s AirLink
  CloudLink
  wired-link could use compute shader based codecs
  Low res depth images
  
  It is amusing how much the conversation has changed, with cloud VR rendering being talking about extensively in the context of the Metaverse, to the point where I am actually cautiously pushing back a bit.
  
  App Lab got released
  Gorilla tag gets more multiplayer use than many massively funded efforts
  Trust the market over content czars
  Far too long review process, still too gated
  Submission backlog
  I argue for a reactive approach, rather than a filtering approach
  My app review schedule has obviously been very bad; I’m struggling with scheduling
  
  It is a very niche feature, but 120 FPS support was a crazy battleground internally
  Quest 1 at 90 won’t happen
  Multiple vendors
  Flash speeds
  Eleven table tennis
  Controller position extrapolation for Eleven Table Tennis
  
  Oculus Go root release
  Challenges of legacy support, strategy, Rooms
  Even before release, discussions about root access
  Not the fault of lawyers — more pushback came from internal product groups
  We are the Good Guys!
  Oculus Go store is locked. Backwards compatibility. Archiving challenges. Sale for all?
  
  
  The Metaverse is the dominant topic of the day
  ————————
  I was quoted all the way back in the 90s as saying that “building the Metaverse is a moral imperative”. Even back then, most people missed that I was making a movie reference, but I was still partially serious.
  
  That leaves many people surprised to find that I have argued against the many efforts that have tried to get started building it.
  
  I want it to exist, but I have reasons to believe that explicitly trying to build it isn’t the best path to getting there. Architecture astronauts.
  
  They don’t want to talk about asset packing optimization, unifying network streams across voice and data, GPU micro architecture quirks, or anything like that. They just want to talk about how an abstract object will be able to contain references to any other abstract object, with control being robustly transferable on command and so on.
  
  Mark Zuckerberg has decided that now is indeed the time to build the Metaverse, so massive wheels are turning, and resources are flowing. The effort will be made.
  
  The challenge now is to try to use the resources wisely and make sure they turn into user value.
  
  My strongest advice is that we should focus on products over technology, architecture, or initiatives.
  
  I didn’t write game engines at Id Software, I wrote games, and some of the resulting technologies were worth reusing. It is hard for many people to accept how rarely planning for open ended functionality winds up actually being a positive thing. If you aren’t using it, it probably doesn’t work.
  
  Horizon Worlds is a product. A product can be clearly judged — how many people are using it, for how long, and in what ways?
  
  Horizon Workrooms is a product. How does it compete with zoom?
  workrooms latency being noticed, but we can do so much better!
  Minimum actually regressed since Go.
  
  Unlike products, architectures and technologies can always claim victory and push the blame onto the applications that use them.
  
  Horizon has some strong points, but it is certainly not the Metaverse of people’s dreams. It feels limiting.
  
  My Q&A session after this is going to have 16 people in the audience. That is a far cry from even the hallway conversations, let alone a keynote audience.
  
  A room with one other person is awkward, but a dozen is interesting. Optimizing for a dozen gives tail cases much larger. Capacity planning.
  
  Do we need truly unlimited concurrency? Million man march? That is a fun architectural challenge, but I really don’t think it is necessary. Best seat in the house.
  
  Horizon in the Cloud
  
  Hybrid cloud rendering considered harmful — render some things locally, like UI and your hands or controllers, and merge it with the cloud rendered world. Definitely not a general purpose system, but maybe for a specific app. This goes all the way back to ancient window systems like NEWS that were dealing with extremely low bandwidth communication links.
  
  Not a panacea:
  A high end PC is indeed more than 10x as powerful as our mobile systems, but that is still a pretty finite multiplier, and there are already many PC efforts using that power without turning into magic.
  
  You can’t scale up both the avatar count and the avatar quality simultaneously even on a high end PC. Rooms full of codec avatars just aren’t happening.
  Economics are going to make cloud rendering less than a high end PC. Nvidia is offering ways to partition GPUs for this reason. Load balancing across time zones — more latency, less cost.
  
  If someone had asked me in the year 2000 if I could build the Metaverse with hardware 100x more powerful than I had at the time, I would have said “yes”. Our mobile hardware today has 100x the computation and rendering power of a tower PC of that vintage.
  
  In many ways, the vision of the Metaverse is an optimization problem, but people want to treat it like an unrestricted design space.
  
  Avatar crowds. Extend the name badge down to hold a 2D cardboard cutout image of the avatar when there isn’t enough performance to render it in 3D. Or just render four blobs that still track the head, torso, and hands.
  
  Cloud rendering does make it trivial to let any device access the content, which may be critical.
  
  Connect challenge. If anything, we are less a virtual conference this year than last year. My Q&A has a fixed invite list, and the Venues sessions required a registration. These are steps backwards.
  
  Are we even aiming at the right targets with the Metaverse?
  
  Feeling of co-presence is the big bet, and I get why FB is making it.
  Freedom FROM co-presence — Champion of the power of isolation
  So many luxuries are the lack of other people: Private offices, private beach, private plane
  We might be over-focusing on people, without recognizing the full value equation.
  
  Maybe 3D modeled items aren’t as critically valuable as assumed.
  screens and people -> lots of screens and lots of people
  Panel sharing
  Subsume all other actions people do, not replace them
  Personal performing screen, outgrowth of an animated profile image
  
  Everyone agrees that a closed platform doesn’t deserve to be called a Metaverse, but there is a big spectrum of options, and we probably won’t be at the most open end.
  I’m personally rather fond of completely unrestricted, wild-west approachs, but there are undeniably significant advantages to more centralized systems. The world runs on them today, and it isn’t just because of an accident of history.
  
  There is no question that commerce must be a part of it — people must be able to make a living in the Metaverse.
  Adult entertainment as a litmus test for how open it is.
  My libertarian sentiments like the idea of crypto as unstoppable global cash, but I recognize the swamp of scams and spam around it.
  I don’t know.
  My bet about centralized versus decentralized systems 18 months from now.
  
  The most obvious path is that the Metaverse is just a big, very flexible app, something like Roblox. Perhaps an outgrowth of Horizon Worlds. With the right interfaces and any Turing complete programming language it is certainly possible to do anything like that, but incorrect decisions, centrally made, can ruin entire swathes of possibilities.
  
  There could be a world where the Metaverse is a giant Unity plugin that provides an extremely rich set of baseline functionality that can be hooked and customized as necessary. That is sort of where we are internally with Horizon Worlds and Horizon Workrooms, and Venues, which are three separate apps with a lot of common functionality. It is currently far from clean, and unclear if it is even a good idea, versus pulling all functionality into one app. Version skew will be a challenge.
  
  Just sharing avatar models, profile information, friend graphs, and so on is an even lower level.
  High score charts with your friends and seeing profile pictures in UI are great, but they aren’t massive features. Avatar style is usually a problem for just taking the models, and you quickly miss other functionality.
  Note that Horizon Home is a completely different technology stack.
  
  —————————
  There is some styling of upcoming hardware as being Metaverse oriented
  —————————
  I don’t really like that — It is important to note that all of the future of work and metaverse applications will work on Quest; fancier headsets will just add some features on top, and we don’t yet know how valuable they will be.
  
  Hardware development takes a long time, and we have multiple new headsets in the pipeline. This is our first year in a while without shipping a new headset, but that is sort of an artifact of Quest 2 being a heroic crash effort to make it out last year.
  
  VR headsets should eventually inhabit all the pricing niches that phones do, from $50 to $2000, but Oculus can only make a couple point samples at a time. There is significant debate about exactly where to place the samples, and it is among the most important decisions we can make, because we have to live with them for years.
  
  We used to talk about working with other hardware vendors to allow more headsets to be built, but it turns out that is very hard when the hardware isn’t sold at a profit, and new features require deep infrastructure work.
  I could imagine a high-FOV or high resolution third party headset.
  Wide field of view is a great feature!
  Cave style projection room with modern VR compatibility for ultimate FOV
  
  Cost is critical — disruptive innovation, innovator’s dilemma
  I think Quest 2’s price was an important factor in the success, and there is lots of data showing non-linear sales increases below certain price points for many types of devices.
  However, we need to acknowledge that even if today’s hardware were completely free, billions of people wouldn’t be using it.
  There are tons of lapsed users today that have a VR headset sitting in a closet, not being used. In contrast, there are near zero “lapsed mobile phone users”.
  The big question is if this is due to software or hardware limitations.
  Tent pole content like Resident Evil is a big test to see if lapsed users resurrect, as they often do on consoles with big big releases.
  
  Personally, I think the fundamental feature spec of Quest is a sufficient baseline. Every component can and should improve, along with comfort and usability factors, but I don’t think fundamentally new components are necessary for a mass adoption future. New components may unlock valuable new opportunities, but I think the untapped opportunities available with the baseline are very large, and are addressable by software.
  
  However, I might be wrong, and higher end headsets with more expensive hardware will test the shape of the adoption curve at other points. Even if they don’t open up large new markets, it is good to have options for people that are willing and able to spend more to get more.
  
  The tease for the next high end headset was intentionally vague, but:
  Eye and face sensors for social presence, high res color sensors for mixed reality, pancake optics for clarity and form factor, and better ergonomics.
  
  Thermals drive so much of the design.
  Actively cooled, passively cooled, long battery life, all day wear
  Joke about body as a heat sink, blood as liquid coolant
  Hardware vs user comfort
  I want to see smoke!
  Car with a 6000 redline that we are forcing to shift at 5000
  Our web browser benchmarks 50% faster when unlocked.
  
  Battery myths and truths — full charge fibs for battery lifetimes
  
  Controller advances — self tracked and passively tracked
  Picking up random Quest controllers like USB A — wrong more often than not
  Colors (red and blue)? Shape?
  Slippery
  Controller free
  
  Embrace flexibility in headsets — swim goggles
  I suspect large fractions of users don’t get lenses centered vertically even if they get IPD right. Tilted screenshots.
  Chromatic aberration as the best lens center, but can only show one eye at a time
  
  ——————
  I still think we can add more value with software improvements on similar HW
  ——————
  I’m so often frustrated with things not working smoothly
  
  The value of a change in convenience — GearVR to Go
  
  How often you have to redraw guardian, or wait for panels to fill up with actual content, or wait for unstable frame rates to settle down.
  
  The recent FB outage was a bad thing, but there was a great internal response charting exactly what stopped working.
  
  Went through the top 100 User Voice suggestions
  Not to find the “top 10”, but to find the low hanging fruit
  
  Multitasking is critical, but still nascent without a lot of apps to use
  I was delighted one time when I thought the keyboard was poorly placed, and I realized that I could just drag it where I wanted it.
  File upload for screenshots from Browser (later: copy-paste)
  
  Web apps versus native android apps versus cloud apps / desktops.
  VR affordances
  It is already sort of a tragedy that millions of apps have to get built for both iOS and Android.
  Android UI development should be our standard 2D UI
  
  Button / thumb stick routing with multiple apps when not pointing at any of them.
  
  Swap based virtual memory is necessary. Non-negotiable. 4K pages suck. We should switch to 64k, but some critical libraries don’t work. Must include GPU memory. New wrinkle with just swapping out biggest mip level and clamping.
  Swapping versus thrashing means flash writes aren’t an issue
  Compressed memory vs real swapping
  GPU resource mapping to flash
  2x difference in performance between flash vendors
  
  UI is often the bottleneck due to design and internationalization, we can go faster
  We should have a VR console for all users akin to the old Quake console
  
  Using more hardware performance when possible, making better cooling mods valuable
  Power, thermals, and value — optimize for as much power as we can, but low battery
  Argument about having a thermal indicator on AUI
  
  We have a lot of completely independent systems doing their own camera analysis today — controller tracking, headset tracking, hand tracking, body tracking, keyboard tracking, intrusion detection, and so on. There is a lot of potential for improvement with integration.
  Camera data privacy — it help development a lot to get samples, but we don’t.
  
  Home environments, theater environments.
  I’m very happy with the quality of our Home environments, but I’m looking forward to third party developers.
  Not putting anything in the near field
  Draw back faces as a solid color for discrete objects
  Clear color for the environment, but you can get lost
  We have gone backwards with theater environments.
  Navigation as a human right in VR, not just teleportation
  
  ——————-
  I still miss being able to do the live app reviews at Connect, but I can throw a few comments for developers
  ——————
  I love working with small development teams, where I can give them a page of feedback, and a few days later see a new build with a lot of changes implemented.
  
  That ability to take many small steps very quickly is your super power, and that is how you can compete against much larger companies. I often lament about how many people we have on projects relative to what third parties have demonstrated.
  
  Targets of opportunity and the value of little things — stereo capture
  
  Oculus developer hub — Perfetto
  Relationship between developers and power users
  
  Peak quality splash screens
  We can make loading faster
  
  Customization for left-handed players
  
  The “mirror trick” for content amplification — seems like a whole new level!
  Walkabout, Daedalus
  
  Mesh optimization, shader optimization
  Avatar mesh optimization
  
  We should make a supersampling shader for Unity for album covers and such
  Talk at connect about using layers properly, but that is a lot more work than just a shader change.
  
  Desktop distance items, as in workrooms, magnify all extrapolation errors, making latency far more important than in most games
  Translational layer composition — only works for free-floating things, not world-embedded
  
  van gough experience
  Disney attractions
  Wrapping apps around video is unfortunate.
  Video commerce, Adult video
  
  VR Shows should start with the best achieved in reality, then extend — Disney, Enter Sandman. Some VR events have felt pathetic. Ball pit in an empty hall.
  EDM concert, Slushi
  
  Misc
  ——-
  Cooperation between the tech titans
  Everyone has a story of feeling deceived or stabbed in the back by another company
  
  I want to install Google Play apps on my headset. I want to be able to cast my iPhone into VR.
  
  I reached out to Phil Spenser at Microsoft after they bought Zenimax about seeing if I could make nice with Id Software, He was supportive but going down into the studio not so much.
  
  Software efficiency. Monoliths. Guardian over shell over overlay hands.
  Compositor-free VR with distortion during resolve
  Filter clamp vs lapped
  
  Movie mezzanine masters with quality already damaged
  
  Microsoft Flight Simulator map of the world, line of sight to a walking simulator of the world
  
  Physical co-presence issues and opportunities
  
  That time I had to abruptly exit Beat Saber to take a call, and people were concerned I might have had a heart attack because I was playing with arm weights and my avatar just fell over and didn’t move
  
  
  ---------------------------------------------------------------------------
  
  ——— Twitter notes ——-
  
  Microsoft buying Zenimax, reaching out
  Body as heat sink, blood as liquid cooling
  Microsoft Flight Simulator map of the world, line of sight to a walking simulator of the world
  “Sponsor” button on GitHub, mapping to VR cash
  Oculus Developer Hub — Perfetto
  VR Shows should start with the best achieved in reality, then extend — Disney, Enter Sandman.  Some VR events have felt pathetic.  Ball pit in an empty hall.
          EDM concert, Slushi
  “Leaders focus in doing the right thing, managers focus on doing things right” — Peter Drucker
  Oculus Go store is locked.  Backwards compatibility. Archiving challenges.  Sale for all?
  Casting VR to PC web browsers
  Cave style projection room with modern VR compatibility for ultimate FOV
  120 FPS odyssey
  “Developer lifetimes” wasted when 50+ years of effort are spent and abandoned
  Spinal cord has same # of neurons as the optic nerve — neck down worth one eye
  Arguing for monolithic codebase instead of cooperating processes
          Shipping the org chart
  Color space issues, defaulting to rec2020
  Picking up random Quest controllers like USB A — wrong more often than not
          Colors (red and blue)?  Shape?
          Slippery
  Improving resolution with color sequential displays
  Driving force of work-from-home on video conferencing, hopefully prioritizes buffer bloat
  Quest User Voice is still not being properly payed attention to
  My app review schedule has obviously been very bad; I’m struggling with scheduling
  App Lab success
          Submission backlog
  Just-a-job versus Really-Care workers, teams, and companies
  That time I had to abruptly exit Beat Saber to take a call, and people were concerned I might have had a heart attack because I was playing with arm weights and my avatar just fell over and didn’t move
  Fades and transitions should be fast!
  Software releases — we aim for monthly and miss.  Aim for weekly?
  Voice assistant — “Hey Facebook, start recording”
  Air Link success
  Peak quality splash screens
          We can make loading faster
  Customization for left-handed players
  The “mirror trick” for content amplification — seems like a whole new level!
          Daedalus
  Multitasking is critical, but nascent right now
  
  ————— twitter requests ————
  VR for productivity
  Hardware evolution
          Brain interfaces
          Wide field of view
                  Cave system
          Two part systems
          Individual, fully adjustable eye cups
          Controllers to hands
          Eyeglasses quality lenses and focusing
          IPD and disabilities
          Haptics
          Custom SoC development
  Unlocking Go story
          Organizational problems with legacy support
  Meta verse
  Data privacy
          Camera data
  Cloud computing
          CloudLink
          Friend’s AirLink
          Cloud Horizon for the Metaverse
  Body tracking with cameras
  Neural supersampling
  FB outage
          Fantastic internal doc about what broke from a user perspective
  Web3
  Is Horizon the right bet?
  Efficiency in modern code
  Fitness use case
  VR operating system
  
  ——— workplace notes ———
  
  Sept 2020
  —————-
  People scalability — room with one other person is awkward, but 8 is interesting
  Routing controller inputs to primary panel even when not pointed at
  Recording video advanced options for quality
  Cloud PC usage for productivity desktops could be efficient — most consumer cores are unused
  We should have a VR console for all users akin to the old Quake console
          UI is often the bottleneck due to design and internationalization, we can go faster
  Using more hardware performance when possible, making better cooling mods valuable
  Android UI development should be our standard 2D UI
  Low latency Bluetooth interferes with our controller tracking
  
  Oct 2020
  —————
  We know at composition time if the frame was generated with a bad prediction, so we might be able to contrast reduce it for comfort like the vestibular hack
  Browser has potential for a lot of specialized CPU clock boosting
  Paper cuts of background process activity even when headset is asleep
  Sketchfab has WebVR, but too slow for decent viewing on Quest
  Fragmented build systems throughout Oculus make development hard
  GPU virtual memory again — new wrinkle with just forcing GPU mip clamps
  Software IPD adjustment on top of hardware IPD for world scale, if not distortion
  What if we took ergonomics really seriously? Could be more important than features.
  We don’t take advantage of peak USB3 or flash transfer rates,
  Horizon in the Cloud
  Compositor-free VR distorting bins on resolve
  
  Nov 2020
  —————
  Power draw / charging over USB to a PC
  Large numbers of people have headsets tilted on their faces, giving off-axis views
  Betting on things — i won the "Apple will not ship an 8k per eye headset in 2020", bet from 2018
  Confidence intervals on posts
  Power, thermals, and value — optimize for as much power as we can, but low battery
  Our web browser could be over 50% faster if we tuned it right
  Why don’t we have theater models now???
  Our default color space is a self-inflicted wound for media watching
  Browsing experience — book spines, video codec for image compression
  We shouldn’t have removed USB Ethernet adapters — it was a memory hunt
  We should make a supersampling shader for Unity for album covers and such
  Q-sync is still not proven unusable to me
  Home environments should be open for anyone to create and sell
  We don’t move fast with software (confidence medium, impact high)
  Avatar mesh optimization
  
  Dec 2020
  —————
  Explicitly valuing and comparing features — sunglasses Q1 vs Q2 as-is
  Some window movement and resizing feels quite good in VR, but we don’t have it all yet
  Screenshot hot key and other undiscoverable features
  File upload for screenshots from Browser (later: copy-paste)
  Desktop distance items, as in workrooms, magnify all extrapolation errors, making latency far more important than in most games
  System splash screens
  Translational layer composition — only works for free-floating things, not world-embedded
  Tent pole content like RE4 is a big test to see if lapsed users resurrect
  
  January 2021
  ———————
  Browser success story
  Thermals — I want to see smoke!
  Controller position extrapolation for Eleven Table Tennis
  We need a path to “friend” people you saw in an app recently
          Screen names vs user names
  We should have a setting to disable the IPD panel pop up
  Geek stats for things by sending a web page to Browser in a message
  Suggest having a thermal indicator on AUI that shows when measures have been taken
  Went through the top 100 User Voice suggestions
  Battery myths and truths — full charge fibs for battery lifetimes
  Release notes for OS updates
  
  February 2021
  ———————-
  The customer is always right - smart TV image processing, audio EQ, overclocking
  Headset capabilities — one-way-doors on feature inclusion
  Android apps — resolution, resizing
  Visualizing tracking quality for users — visible features, lighting levels
  Shell experience has degraded from “perfect” to often juddering
  Are we even aiming at the right social target? Need greater avatar counts.
          Panel sharing, don’t chase fidelity (codec avatars)
  Hearing aid like audio processing for social to subtract background noise
  Avatar rendering performance
  Screen sharing from PC in VR with BigScreen
  
  March 2021
  ——————
  Tracked keyboard / Remote Desktop speed-of-light
          Pass-through hands vs rendered hands
  The on-mount opportunity — instant display of the best information
  Blocking button input, decoupling input from frame rate
  Lens fogging is still an issue for some
  Embrace flexibility in headsets — swim goggles
  Shared memory camera buffers instead of message passing
  
  April 2021
  —————
  Get prop / set prop are “joyful APIs”
  Direct block writes to display from GPU instead of scanout from memory
  Q-sync
  Hybrid cloud rendering considered harmful
  The “missing manual” for Quest — button chords, hovers, assistant
  Benchmarking challenges with variable clock rates
  Haptics on the headset? Vibration on GearVR
  Persist UI across launches / reboots
  Mixed Reality capture is neat, but very janky
  
  May 2021
  —————-
  Screenshot cloud saves — ODH functionality should be consumer functionality
  App Lab approval process is too slow
  Supersampling without ddx/ ddy goes 20% faster
  Mixed Reality Capture challenges with cross-app and audio sync
  Headset waking itself up and wasting battery
  Cloud desktops again
  Separate projects instead of monoliths enshrine “the right to balloon”
  Is there a middle-ground between all-day wearable and task focused headsets?
          Essentially nobody would wear a current headset all day even if the battery lasted long enough
          Many hours at work or home?
          I’m happier in a headset than a KN95 mask
          Mounting as easy as picking up a phone
  Get rid of GPU CAC?
  Automatic shadow accounts for services to use our IAP?
  AUI recent apps doesn’t update when you launch an app, making it briefly stale on return
  
  June 2021
  —————-
  Resolution issues
  Maxing out hand tracking quality versus changing UI to favor it (doesn’t help legacy)
  Synchronizing cameras with displays — power cycle issues
  Compute shader based video codecs instead of h264/h265 for AirLink
  The advances possible with tracking and world understanding over separate headset / hands / body / keyboard / controller tracking
  I worry we might “innovator’s dilemma” ourselves by focusing on high end
  
  July 2021
  —————
  Specializing “touchable surfaces” with system level shadowing and audio cues
  Perfetto not convenient (better now with ODH!)
  Continuous education is more important than on boarding
  Thermal limits, again — we are selling a car that can rev to the 6k, but always shifting at 5k
  AUI is a tablet, Home is a docking station, and docked windows are shared with co-present friends.
  Memory management — virtual memory is absolutely required.
  
  August 2021
  ——————-
  Fear of cooperation with other big tech companies
          Everyone has a story of feeling deceived or stabbed in the back by another company
  Audio latency again — system level is worse than Oculus Go, even though callbacks faster
  We should have a traditional phone Home Screen layout
  Positional time warp
  Working in an environment where performance trades must be considered leads to better designs
  Party views keep everyone in a consistent home, even when they go to another app
  Should server side audio mixing be to a stereo head pose, then “warped” for miss-reduction?
  Voice latency
  
  September 2021
  —————————
  Co-watching from any HTML video link, not just approved apps.
  Perfetto integration into ODH makes me happy
  Confirm launch dialog is a terrible idea
  Window dragging works great!
  Home button should kill an app launch even before it gets to the event loop
  Specializing parties around home
  Concerned about high headset prices
  Beat saber without controllers
  Fix not-holding controllers problem
  Can we use less cameras?
  
  October 2021
  ———————-
  Targets of opportunity and the value of little things — stereo capture
  Peak movie quality (mezzanine masters)
  Revisiting GearVR, the usability delta to Go is striking
  Put data in everyone’s face — dashboard title pics
  Relative cursor control with hands
  
   </div>
}

export default About

// <!-- 
// ---
// title: John Carmack's Connect 2021 Talk
// tags:
//   - college
//   - hey
// date: 2021-05-09

// ---
// (Original Source)[https://www.dropbox.com/s/ruv739914jzquue/connect2021.txt?dl=0]


// These are my notes for my (John Carmack) Connect 2021 talk.

// The "raw data" from my retrospective scan of tweets, responses to my request-for-questions, and posts follows the outline I had planned to talk over.

// Obviously I didn't even get through my organized topics, let alone everything I had tagged as maybe-interesting-to-talk-about.

// ---------------------------------------------------

// Welcome to Connect everyone!

// My process for these talks is to skim over all the internal posts and public tweets that I made in the last year to refresh my memory, then try to sort them into some kind of vaguely coherent topic flow.

// I’m usually a bit of a counterpoint to the grand strategic narratives with my nuts and bolts focus, and I’m traditionally a lot grumpier and more critical, but I have a lot of things to be happy about this year.

// The most important thing is that Quest 2 has been a big success.
// It was better, faster, and cheaper — a rare combination!
// if we didn’t see any traction with that, it would be a very bad sign!

// We got several other wins that I have been pushing for:
// ————————————
// Air Link got released, and it has been great. Not everyone has good enough WiFi, but a lot of people get a good deal of value out of it.
// Friend’s AirLink
// CloudLink
// wired-link could use compute shader based codecs
// Low res depth images

// It is amusing how much the conversation has changed, with cloud VR rendering being talking about extensively in the context of the Metaverse, to the point where I am actually cautiously pushing back a bit.

// App Lab got released
// Gorilla tag gets more multiplayer use than many massively funded efforts
// Trust the market over content czars
// Far too long review process, still too gated
// Submission backlog
// I argue for a reactive approach, rather than a filtering approach
// My app review schedule has obviously been very bad; I’m struggling with scheduling

// It is a very niche feature, but 120 FPS support was a crazy battleground internally
// Quest 1 at 90 won’t happen
// Multiple vendors
// Flash speeds
// Eleven table tennis
// Controller position extrapolation for Eleven Table Tennis

// Oculus Go root release
// Challenges of legacy support, strategy, Rooms
// Even before release, discussions about root access
// Not the fault of lawyers — more pushback came from internal product groups
// We are the Good Guys!
// Oculus Go store is locked. Backwards compatibility. Archiving challenges. Sale for all?


// The Metaverse is the dominant topic of the day
// ————————
// I was quoted all the way back in the 90s as saying that “building the Metaverse is a moral imperative”. Even back then, most people missed that I was making a movie reference, but I was still partially serious.

// That leaves many people surprised to find that I have argued against the many efforts that have tried to get started building it.

// I want it to exist, but I have reasons to believe that explicitly trying to build it isn’t the best path to getting there. Architecture astronauts.

// They don’t want to talk about asset packing optimization, unifying network streams across voice and data, GPU micro architecture quirks, or anything like that. They just want to talk about how an abstract object will be able to contain references to any other abstract object, with control being robustly transferable on command and so on.

// Mark Zuckerberg has decided that now is indeed the time to build the Metaverse, so massive wheels are turning, and resources are flowing. The effort will be made.

// The challenge now is to try to use the resources wisely and make sure they turn into user value.

// My strongest advice is that we should focus on products over technology, architecture, or initiatives.

// I didn’t write game engines at Id Software, I wrote games, and some of the resulting technologies were worth reusing. It is hard for many people to accept how rarely planning for open ended functionality winds up actually being a positive thing. If you aren’t using it, it probably doesn’t work.

// Horizon Worlds is a product. A product can be clearly judged — how many people are using it, for how long, and in what ways?

// Horizon Workrooms is a product. How does it compete with zoom?
// workrooms latency being noticed, but we can do so much better!
// Minimum actually regressed since Go.

// Unlike products, architectures and technologies can always claim victory and push the blame onto the applications that use them.

// Horizon has some strong points, but it is certainly not the Metaverse of people’s dreams. It feels limiting.

// My Q&A session after this is going to have 16 people in the audience. That is a far cry from even the hallway conversations, let alone a keynote audience.

// A room with one other person is awkward, but a dozen is interesting. Optimizing for a dozen gives tail cases much larger. Capacity planning.

// Do we need truly unlimited concurrency? Million man march? That is a fun architectural challenge, but I really don’t think it is necessary. Best seat in the house.

// Horizon in the Cloud

// Hybrid cloud rendering considered harmful — render some things locally, like UI and your hands or controllers, and merge it with the cloud rendered world. Definitely not a general purpose system, but maybe for a specific app. This goes all the way back to ancient window systems like NEWS that were dealing with extremely low bandwidth communication links.

// Not a panacea:
// A high end PC is indeed more than 10x as powerful as our mobile systems, but that is still a pretty finite multiplier, and there are already many PC efforts using that power without turning into magic.

// You can’t scale up both the avatar count and the avatar quality simultaneously even on a high end PC. Rooms full of codec avatars just aren’t happening.
// Economics are going to make cloud rendering less than a high end PC. Nvidia is offering ways to partition GPUs for this reason. Load balancing across time zones — more latency, less cost.

// If someone had asked me in the year 2000 if I could build the Metaverse with hardware 100x more powerful than I had at the time, I would have said “yes”. Our mobile hardware today has 100x the computation and rendering power of a tower PC of that vintage.

// In many ways, the vision of the Metaverse is an optimization problem, but people want to treat it like an unrestricted design space.

// Avatar crowds. Extend the name badge down to hold a 2D cardboard cutout image of the avatar when there isn’t enough performance to render it in 3D. Or just render four blobs that still track the head, torso, and hands.

// Cloud rendering does make it trivial to let any device access the content, which may be critical.

// Connect challenge. If anything, we are less a virtual conference this year than last year. My Q&A has a fixed invite list, and the Venues sessions required a registration. These are steps backwards.

// Are we even aiming at the right targets with the Metaverse?

// Feeling of co-presence is the big bet, and I get why FB is making it.
// Freedom FROM co-presence — Champion of the power of isolation
// So many luxuries are the lack of other people: Private offices, private beach, private plane
// We might be over-focusing on people, without recognizing the full value equation.

// Maybe 3D modeled items aren’t as critically valuable as assumed.
// screens and people -> lots of screens and lots of people
// Panel sharing
// Subsume all other actions people do, not replace them
// Personal performing screen, outgrowth of an animated profile image

// Everyone agrees that a closed platform doesn’t deserve to be called a Metaverse, but there is a big spectrum of options, and we probably won’t be at the most open end.
// I’m personally rather fond of completely unrestricted, wild-west approachs, but there are undeniably significant advantages to more centralized systems. The world runs on them today, and it isn’t just because of an accident of history.

// There is no question that commerce must be a part of it — people must be able to make a living in the Metaverse.
// Adult entertainment as a litmus test for how open it is.
// My libertarian sentiments like the idea of crypto as unstoppable global cash, but I recognize the swamp of scams and spam around it.
// I don’t know.
// My bet about centralized versus decentralized systems 18 months from now.

// The most obvious path is that the Metaverse is just a big, very flexible app, something like Roblox. Perhaps an outgrowth of Horizon Worlds. With the right interfaces and any Turing complete programming language it is certainly possible to do anything like that, but incorrect decisions, centrally made, can ruin entire swathes of possibilities.

// There could be a world where the Metaverse is a giant Unity plugin that provides an extremely rich set of baseline functionality that can be hooked and customized as necessary. That is sort of where we are internally with Horizon Worlds and Horizon Workrooms, and Venues, which are three separate apps with a lot of common functionality. It is currently far from clean, and unclear if it is even a good idea, versus pulling all functionality into one app. Version skew will be a challenge.

// Just sharing avatar models, profile information, friend graphs, and so on is an even lower level.
// High score charts with your friends and seeing profile pictures in UI are great, but they aren’t massive features. Avatar style is usually a problem for just taking the models, and you quickly miss other functionality.
// Note that Horizon Home is a completely different technology stack.

// —————————
// There is some styling of upcoming hardware as being Metaverse oriented
// —————————
// I don’t really like that — It is important to note that all of the future of work and metaverse applications will work on Quest; fancier headsets will just add some features on top, and we don’t yet know how valuable they will be.

// Hardware development takes a long time, and we have multiple new headsets in the pipeline. This is our first year in a while without shipping a new headset, but that is sort of an artifact of Quest 2 being a heroic crash effort to make it out last year.

// VR headsets should eventually inhabit all the pricing niches that phones do, from $50 to $2000, but Oculus can only make a couple point samples at a time. There is significant debate about exactly where to place the samples, and it is among the most important decisions we can make, because we have to live with them for years.

// We used to talk about working with other hardware vendors to allow more headsets to be built, but it turns out that is very hard when the hardware isn’t sold at a profit, and new features require deep infrastructure work.
// I could imagine a high-FOV or high resolution third party headset.
// Wide field of view is a great feature!
// Cave style projection room with modern VR compatibility for ultimate FOV

// Cost is critical — disruptive innovation, innovator’s dilemma
// I think Quest 2’s price was an important factor in the success, and there is lots of data showing non-linear sales increases below certain price points for many types of devices.
// However, we need to acknowledge that even if today’s hardware were completely free, billions of people wouldn’t be using it.
// There are tons of lapsed users today that have a VR headset sitting in a closet, not being used. In contrast, there are near zero “lapsed mobile phone users”.
// The big question is if this is due to software or hardware limitations.
// Tent pole content like Resident Evil is a big test to see if lapsed users resurrect, as they often do on consoles with big big releases.

// Personally, I think the fundamental feature spec of Quest is a sufficient baseline. Every component can and should improve, along with comfort and usability factors, but I don’t think fundamentally new components are necessary for a mass adoption future. New components may unlock valuable new opportunities, but I think the untapped opportunities available with the baseline are very large, and are addressable by software.

// However, I might be wrong, and higher end headsets with more expensive hardware will test the shape of the adoption curve at other points. Even if they don’t open up large new markets, it is good to have options for people that are willing and able to spend more to get more.

// The tease for the next high end headset was intentionally vague, but:
// Eye and face sensors for social presence, high res color sensors for mixed reality, pancake optics for clarity and form factor, and better ergonomics.

// Thermals drive so much of the design.
// Actively cooled, passively cooled, long battery life, all day wear
// Joke about body as a heat sink, blood as liquid coolant
// Hardware vs user comfort
// I want to see smoke!
// Car with a 6000 redline that we are forcing to shift at 5000
// Our web browser benchmarks 50% faster when unlocked.

// Battery myths and truths — full charge fibs for battery lifetimes

// Controller advances — self tracked and passively tracked
// Picking up random Quest controllers like USB A — wrong more often than not
// Colors (red and blue)? Shape?
// Slippery
// Controller free

// Embrace flexibility in headsets — swim goggles
// I suspect large fractions of users don’t get lenses centered vertically even if they get IPD right. Tilted screenshots.
// Chromatic aberration as the best lens center, but can only show one eye at a time

// ——————
// I still think we can add more value with software improvements on similar HW
// ——————
// I’m so often frustrated with things not working smoothly

// The value of a change in convenience — GearVR to Go

// How often you have to redraw guardian, or wait for panels to fill up with actual content, or wait for unstable frame rates to settle down.

// The recent FB outage was a bad thing, but there was a great internal response charting exactly what stopped working.

// Went through the top 100 User Voice suggestions
// Not to find the “top 10”, but to find the low hanging fruit

// Multitasking is critical, but still nascent without a lot of apps to use
// I was delighted one time when I thought the keyboard was poorly placed, and I realized that I could just drag it where I wanted it.
// File upload for screenshots from Browser (later: copy-paste)

// Web apps versus native android apps versus cloud apps / desktops.
// VR affordances
// It is already sort of a tragedy that millions of apps have to get built for both iOS and Android.
// Android UI development should be our standard 2D UI

// Button / thumb stick routing with multiple apps when not pointing at any of them.

// Swap based virtual memory is necessary. Non-negotiable. 4K pages suck. We should switch to 64k, but some critical libraries don’t work. Must include GPU memory. New wrinkle with just swapping out biggest mip level and clamping.
// Swapping versus thrashing means flash writes aren’t an issue
// Compressed memory vs real swapping
// GPU resource mapping to flash
// 2x difference in performance between flash vendors

// UI is often the bottleneck due to design and internationalization, we can go faster
// We should have a VR console for all users akin to the old Quake console

// Using more hardware performance when possible, making better cooling mods valuable
// Power, thermals, and value — optimize for as much power as we can, but low battery
// Argument about having a thermal indicator on AUI

// We have a lot of completely independent systems doing their own camera analysis today — controller tracking, headset tracking, hand tracking, body tracking, keyboard tracking, intrusion detection, and so on. There is a lot of potential for improvement with integration.
// Camera data privacy — it help development a lot to get samples, but we don’t.

// Home environments, theater environments.
// I’m very happy with the quality of our Home environments, but I’m looking forward to third party developers.
// Not putting anything in the near field
// Draw back faces as a solid color for discrete objects
// Clear color for the environment, but you can get lost
// We have gone backwards with theater environments.
// Navigation as a human right in VR, not just teleportation

// ——————-
// I still miss being able to do the live app reviews at Connect, but I can throw a few comments for developers
// ——————
// I love working with small development teams, where I can give them a page of feedback, and a few days later see a new build with a lot of changes implemented.

// That ability to take many small steps very quickly is your super power, and that is how you can compete against much larger companies. I often lament about how many people we have on projects relative to what third parties have demonstrated.

// Targets of opportunity and the value of little things — stereo capture

// Oculus developer hub — Perfetto
// Relationship between developers and power users

// Peak quality splash screens
// We can make loading faster

// Customization for left-handed players

// The “mirror trick” for content amplification — seems like a whole new level!
// Walkabout, Daedalus

// Mesh optimization, shader optimization
// Avatar mesh optimization

// We should make a supersampling shader for Unity for album covers and such
// Talk at connect about using layers properly, but that is a lot more work than just a shader change.

// Desktop distance items, as in workrooms, magnify all extrapolation errors, making latency far more important than in most games
// Translational layer composition — only works for free-floating things, not world-embedded

// van gough experience
// Disney attractions
// Wrapping apps around video is unfortunate.
// Video commerce, Adult video

// VR Shows should start with the best achieved in reality, then extend — Disney, Enter Sandman. Some VR events have felt pathetic. Ball pit in an empty hall.
// EDM concert, Slushi

// Misc
// ——-
// Cooperation between the tech titans
// Everyone has a story of feeling deceived or stabbed in the back by another company

// I want to install Google Play apps on my headset. I want to be able to cast my iPhone into VR.

// I reached out to Phil Spenser at Microsoft after they bought Zenimax about seeing if I could make nice with Id Software, He was supportive but going down into the studio not so much.

// Software efficiency. Monoliths. Guardian over shell over overlay hands.
// Compositor-free VR with distortion during resolve
// Filter clamp vs lapped

// Movie mezzanine masters with quality already damaged

// Microsoft Flight Simulator map of the world, line of sight to a walking simulator of the world

// Physical co-presence issues and opportunities

// That time I had to abruptly exit Beat Saber to take a call, and people were concerned I might have had a heart attack because I was playing with arm weights and my avatar just fell over and didn’t move


// ---------------------------------------------------------------------------

// ——— Twitter notes ——-

// Microsoft buying Zenimax, reaching out
// Body as heat sink, blood as liquid cooling
// Microsoft Flight Simulator map of the world, line of sight to a walking simulator of the world
// “Sponsor” button on GitHub, mapping to VR cash
// Oculus Developer Hub — Perfetto
// VR Shows should start with the best achieved in reality, then extend — Disney, Enter Sandman.  Some VR events have felt pathetic.  Ball pit in an empty hall.
//         EDM concert, Slushi
// “Leaders focus in doing the right thing, managers focus on doing things right” — Peter Drucker
// Oculus Go store is locked.  Backwards compatibility. Archiving challenges.  Sale for all?
// Casting VR to PC web browsers
// Cave style projection room with modern VR compatibility for ultimate FOV
// 120 FPS odyssey
// “Developer lifetimes” wasted when 50+ years of effort are spent and abandoned
// Spinal cord has same # of neurons as the optic nerve — neck down worth one eye
// Arguing for monolithic codebase instead of cooperating processes
//         Shipping the org chart
// Color space issues, defaulting to rec2020
// Picking up random Quest controllers like USB A — wrong more often than not
//         Colors (red and blue)?  Shape?
//         Slippery
// Improving resolution with color sequential displays
// Driving force of work-from-home on video conferencing, hopefully prioritizes buffer bloat
// Quest User Voice is still not being properly payed attention to
// My app review schedule has obviously been very bad; I’m struggling with scheduling
// App Lab success
//         Submission backlog
// Just-a-job versus Really-Care workers, teams, and companies
// That time I had to abruptly exit Beat Saber to take a call, and people were concerned I might have had a heart attack because I was playing with arm weights and my avatar just fell over and didn’t move
// Fades and transitions should be fast!
// Software releases — we aim for monthly and miss.  Aim for weekly?
// Voice assistant — “Hey Facebook, start recording”
// Air Link success
// Peak quality splash screens
//         We can make loading faster
// Customization for left-handed players
// The “mirror trick” for content amplification — seems like a whole new level!
//         Daedalus
// Multitasking is critical, but nascent right now

// ————— twitter requests ————
// VR for productivity
// Hardware evolution
//         Brain interfaces
//         Wide field of view
//                 Cave system
//         Two part systems
//         Individual, fully adjustable eye cups
//         Controllers to hands
//         Eyeglasses quality lenses and focusing
//         IPD and disabilities
//         Haptics
//         Custom SoC development
// Unlocking Go story
//         Organizational problems with legacy support
// Meta verse
// Data privacy
//         Camera data
// Cloud computing
//         CloudLink
//         Friend’s AirLink
//         Cloud Horizon for the Metaverse
// Body tracking with cameras
// Neural supersampling
// FB outage
//         Fantastic internal doc about what broke from a user perspective
// Web3
// Is Horizon the right bet?
// Efficiency in modern code
// Fitness use case
// VR operating system

// ——— workplace notes ———

// Sept 2020
// —————-
// People scalability — room with one other person is awkward, but 8 is interesting
// Routing controller inputs to primary panel even when not pointed at
// Recording video advanced options for quality
// Cloud PC usage for productivity desktops could be efficient — most consumer cores are unused
// We should have a VR console for all users akin to the old Quake console
//         UI is often the bottleneck due to design and internationalization, we can go faster
// Using more hardware performance when possible, making better cooling mods valuable
// Android UI development should be our standard 2D UI
// Low latency Bluetooth interferes with our controller tracking

// Oct 2020
// —————
// We know at composition time if the frame was generated with a bad prediction, so we might be able to contrast reduce it for comfort like the vestibular hack
// Browser has potential for a lot of specialized CPU clock boosting
// Paper cuts of background process activity even when headset is asleep
// Sketchfab has WebVR, but too slow for decent viewing on Quest
// Fragmented build systems throughout Oculus make development hard
// GPU virtual memory again — new wrinkle with just forcing GPU mip clamps
// Software IPD adjustment on top of hardware IPD for world scale, if not distortion
// What if we took ergonomics really seriously? Could be more important than features.
// We don’t take advantage of peak USB3 or flash transfer rates,
// Horizon in the Cloud
// Compositor-free VR distorting bins on resolve

// Nov 2020
// —————
// Power draw / charging over USB to a PC
// Large numbers of people have headsets tilted on their faces, giving off-axis views
// Betting on things — i won the "Apple will not ship an 8k per eye headset in 2020", bet from 2018
// Confidence intervals on posts
// Power, thermals, and value — optimize for as much power as we can, but low battery
// Our web browser could be over 50% faster if we tuned it right
// Why don’t we have theater models now???
// Our default color space is a self-inflicted wound for media watching
// Browsing experience — book spines, video codec for image compression
// We shouldn’t have removed USB Ethernet adapters — it was a memory hunt
// We should make a supersampling shader for Unity for album covers and such
// Q-sync is still not proven unusable to me
// Home environments should be open for anyone to create and sell
// We don’t move fast with software (confidence medium, impact high)
// Avatar mesh optimization

// Dec 2020
// —————
// Explicitly valuing and comparing features — sunglasses Q1 vs Q2 as-is
// Some window movement and resizing feels quite good in VR, but we don’t have it all yet
// Screenshot hot key and other undiscoverable features
// File upload for screenshots from Browser (later: copy-paste)
// Desktop distance items, as in workrooms, magnify all extrapolation errors, making latency far more important than in most games
// System splash screens
// Translational layer composition — only works for free-floating things, not world-embedded
// Tent pole content like RE4 is a big test to see if lapsed users resurrect

// January 2021
// ———————
// Browser success story
// Thermals — I want to see smoke!
// Controller position extrapolation for Eleven Table Tennis
// We need a path to “friend” people you saw in an app recently
//         Screen names vs user names
// We should have a setting to disable the IPD panel pop up
// Geek stats for things by sending a web page to Browser in a message
// Suggest having a thermal indicator on AUI that shows when measures have been taken
// Went through the top 100 User Voice suggestions
// Battery myths and truths — full charge fibs for battery lifetimes
// Release notes for OS updates

// February 2021
// ———————-
// The customer is always right - smart TV image processing, audio EQ, overclocking
// Headset capabilities — one-way-doors on feature inclusion
// Android apps — resolution, resizing
// Visualizing tracking quality for users — visible features, lighting levels
// Shell experience has degraded from “perfect” to often juddering
// Are we even aiming at the right social target? Need greater avatar counts.
//         Panel sharing, don’t chase fidelity (codec avatars)
// Hearing aid like audio processing for social to subtract background noise
// Avatar rendering performance
// Screen sharing from PC in VR with BigScreen

// March 2021
// ——————
// Tracked keyboard / Remote Desktop speed-of-light
//         Pass-through hands vs rendered hands
// The on-mount opportunity — instant display of the best information
// Blocking button input, decoupling input from frame rate
// Lens fogging is still an issue for some
// Embrace flexibility in headsets — swim goggles
// Shared memory camera buffers instead of message passing

// April 2021
// —————
// Get prop / set prop are “joyful APIs”
// Direct block writes to display from GPU instead of scanout from memory
// Q-sync
// Hybrid cloud rendering considered harmful
// The “missing manual” for Quest — button chords, hovers, assistant
// Benchmarking challenges with variable clock rates
// Haptics on the headset? Vibration on GearVR
// Persist UI across launches / reboots
// Mixed Reality capture is neat, but very janky

// May 2021
// —————-
// Screenshot cloud saves — ODH functionality should be consumer functionality
// App Lab approval process is too slow
// Supersampling without ddx/ ddy goes 20% faster
// Mixed Reality Capture challenges with cross-app and audio sync
// Headset waking itself up and wasting battery
// Cloud desktops again
// Separate projects instead of monoliths enshrine “the right to balloon”
// Is there a middle-ground between all-day wearable and task focused headsets?
//         Essentially nobody would wear a current headset all day even if the battery lasted long enough
//         Many hours at work or home?
//         I’m happier in a headset than a KN95 mask
//         Mounting as easy as picking up a phone
// Get rid of GPU CAC?
// Automatic shadow accounts for services to use our IAP?
// AUI recent apps doesn’t update when you launch an app, making it briefly stale on return

// June 2021
// —————-
// Resolution issues
// Maxing out hand tracking quality versus changing UI to favor it (doesn’t help legacy)
// Synchronizing cameras with displays — power cycle issues
// Compute shader based video codecs instead of h264/h265 for AirLink
// The advances possible with tracking and world understanding over separate headset / hands / body / keyboard / controller tracking
// I worry we might “innovator’s dilemma” ourselves by focusing on high end

// July 2021
// —————
// Specializing “touchable surfaces” with system level shadowing and audio cues
// Perfetto not convenient (better now with ODH!)
// Continuous education is more important than on boarding
// Thermal limits, again — we are selling a car that can rev to the 6k, but always shifting at 5k
// AUI is a tablet, Home is a docking station, and docked windows are shared with co-present friends.
// Memory management — virtual memory is absolutely required.

// August 2021
// ——————-
// Fear of cooperation with other big tech companies
//         Everyone has a story of feeling deceived or stabbed in the back by another company
// Audio latency again — system level is worse than Oculus Go, even though callbacks faster
// We should have a traditional phone Home Screen layout
// Positional time warp
// Working in an environment where performance trades must be considered leads to better designs
// Party views keep everyone in a consistent home, even when they go to another app
// Should server side audio mixing be to a stereo head pose, then “warped” for miss-reduction?
// Voice latency

// September 2021
// —————————
// Co-watching from any HTML video link, not just approved apps.
// Perfetto integration into ODH makes me happy
// Confirm launch dialog is a terrible idea
// Window dragging works great!
// Home button should kill an app launch even before it gets to the event loop
// Specializing parties around home
// Concerned about high headset prices
// Beat saber without controllers
// Fix not-holding controllers problem
// Can we use less cameras?

// October 2021
// ———————-
// Targets of opportunity and the value of little things — stereo capture
// Peak movie quality (mezzanine masters)
// Revisiting GearVR, the usability delta to Go is striking
// Put data in everyone’s face — dashboard title pics
// Relative cursor control with hands

//   -->