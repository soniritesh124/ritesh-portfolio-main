import "./styles/TechStack.css";

const TechStack = () => {
  const categories = [
    {
      title: "Programming",
      items: ["C", "Embedded C", "Python", "HTML", "CSS", "JavaScript"],
    },
    {
      title: "Microcontrollers",
      items: ["ESP32", "ESP8266", "Raspberry Pi", "STM32", "Arduino"],
    },
    {
      title: "Communication Protocols",
      items: ["MQTT", "BLE", "UART", "I2C", "SPI", "GPIO", "PWM", "MODBUS", "CAN"],
    },
    {
      title: "Cloud Platforms",
      items: ["AWS IoT Core", "Google Cloud IoT"],
    },
    {
      title: "Web & Visualization",
      items: ["Web Dashboards", "Real-Time Data Display"],
    },
    {
      title: "Connectivity",
      items: ["Wi-Fi", "Ethernet", "GSM"],
    },
    {
      title: "Operating Systems",
      items: ["Linux", "Ubuntu", "Raspbian OS"],
    },
    {
      title: "Version Control",
      items: ["Git", "GitHub"],
    },
    {
      title: "PCB & Hardware",
      items: ["Sensor Integration", "PCB Testing"],
    },
    {
      title: "Tools",
      items: ["Mosquitto", "OpenCV", "TensorFlow", "Face Recognition Libraries"],
    },
  ];

  return (
    <div className="techstack-section" id="techstack">
      <div className="techstack-container">
        <h2>My TechStack</h2>
        <div className="techstack-grid">
          {categories.map((cat, index) => (
            <div className="techstack-card" key={index}>
              <h3>{cat.title}</h3>
              <div className="techstack-items">
                {cat.items.map((item, i) => (
                  <span className="tech-tag" key={i}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
