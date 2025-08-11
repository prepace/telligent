
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
// import { Description } from "@radix-ui/react-dialog"

export default function Subscribe() {
  return (
    <div className="bg-gray-100 p-4 mb-6">
      <h2 className="font-serif text-xl font-bold mb-2">Subscribe to Health</h2>
      <p className="text-sm mb-4">
        Get the latest mental health news and research delivered to your inbox every week.
      </p>
      <div className="space-y-3">
        <Input placeholder="Email address" />
        <Button className="w-full">Sign up</Button>
      </div>
      <p className="text-xs text-gray-600 mt-2">
        By signing up you agree to our{" "}
        <a href="/terms" className="underline">
          Terms of Use
        </a>{" "}
        and{" "}
        <a href="/privacy" className="underline">
          Privacy Policy
        </a>
      </p>
    </div>
  )
}