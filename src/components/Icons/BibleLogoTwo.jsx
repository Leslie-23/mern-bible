import { useEffect, useState } from "react";

export default function BibleLogoTwo() {
  const cubic = "cubic-bezier(0.54, 0.54, 0.02, 0.96)";
  const delays = ["0ms", "150ms", "300ms", "450ms"];
  const dur = "150ms";

  const [deltas, setDeltas] = useState({
    // chevrons will get stacked, so 'one' will be at the bottom once animation is done
    one: 123.43592,
    two: 123.43592,
    three: 123.43592,
    four: 123.43592,
  });

  useEffect(() => {
    setTimeout(() => {
      setDeltas({
        one: 135.43592,
        two: 132.43592,
        three: 129.43592,
        four: 126.43592,
      });
    }, 350);
  }, []);

  const chevronOnePath = `m 98.315898,${deltas.one} v -2 l 17.320502,10 25.9808,-15 v 2 l -25.9808,15 z`;
  const chevronTwoPath = `m 98.315898,${deltas.two} v -2 l 17.320502,10 25.9808,-15 v 2 l -25.9808,15 z`;
  const chevronThreePath = `m 98.315898,${deltas.three} v -2 l 17.320502,10 25.9808,-15 v 2 l -25.9808,15 z`;
  const chevronFourPath = `m 98.315898,${deltas.four} v -2 l 17.320502,10 25.9808,-15 v 2 l -25.9808,15 z`;

  return (
    <svg
      fill="#00FFDA"
      viewBox="95.718109 104.93567 45.899 43.5"
      height={"100%"}
    >
      <path d="M 121.6986,104.93567 95.718109,119.9358 v 16.99998 l 19.918361,11.50006 25.98076,-15.0001 v -1.99988 l -25.98076,15.00013 -18.186663,-10.50015 v -12.99972 l 18.186663,10.49962 25.98076,-14.9996 v -2.00041 z m -3.46392,6.00014 4.32991,2.5001 4.3299,-2.5001 3.46446,1.99988 -4.33044,2.5001 4.33044,2.50013 -3.46446,1.99988 -4.3299,-2.50013 -12.99052,7.50033 -3.46366,-1.99988 12.99025,-7.50033 -4.33043,-2.5001 z" />

      <path
        d={chevronOnePath}
        style={{
          transition: cubic,
          transitionDelay: delays[0],
          transitionDuration: dur,
        }}
      />
      <path
        d={chevronTwoPath}
        style={{
          transition: cubic,
          transitionDelay: delays[1],
          transitionDuration: dur,
        }}
      />
      <path
        d={chevronThreePath}
        style={{
          transition: cubic,
          transitionDelay: delays[2],
          transitionDuration: dur,
        }}
      />
      <path
        d={chevronFourPath}
        style={{
          transition: cubic,
          transitionDelay: delays[3],
          transitionDuration: dur,
        }}
      />
    </svg>
  );
}
